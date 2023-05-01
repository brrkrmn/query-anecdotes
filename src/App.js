import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getAnecdotes, createAnecdote, updateAnecdote } from './requests'
import { useNotificationDispatch } from './NotificationContext'

const App = () => {
  const dispatch = useNotificationDispatch()
  const queryClient = useQueryClient()
  const result = useQuery(
    'anecdotes',
    getAnecdotes
  )

  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: () => {queryClient.invalidateQueries('anecdotes')},
    onError: () => {setNotification('Too short anecdote, must have length 5 or more')}
  })

  const voteAnecdoteMutation = useMutation(updateAnecdote, {
    onSuccess: () => {queryClient.invalidateQueries('anecdotes')}
  })

  if (result.isLoading) {
    return <div>loading data...</div>
  } else if (result.error) {
    return <div>Anecdote service not available due to problems in server</div>
  }

  const anecdotes = result.data
  
  const handleVote = (anecdote) => {
    const newAnecdote = {...anecdote, votes: anecdote.votes + 1}
    voteAnecdoteMutation.mutate(newAnecdote)
    setNotification(`${anecdote.content} is voted.`)
  }

  const setNotification = (content) => {
    dispatch({ type: "SHOW", payload: content})
  }

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm newAnecdoteMutation={newAnecdoteMutation} setNotification={setNotification} />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
