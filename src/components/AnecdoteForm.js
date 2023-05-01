const AnecdoteForm = ({ newAnecdoteMutation, setNotification }) => {

  const onCreate = (event) => {
    event.preventDefault()
    const newAnecdote = {
      content: event.target.anecdote.value,
      votes: 0,
    }
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate(newAnecdote)
    setNotification(`${newAnecdote.content} is added`)
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
