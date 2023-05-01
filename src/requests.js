import axios from "axios"

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export const createAnecdote = async (newAnecdote) => {
    console.log(newAnecdote)
    const response = await axios.post(baseUrl, newAnecdote)
    return response.data
}

export const updateAnecdote = async (anecdoteToUpdate) => {
    const response = await axios.put(`${baseUrl}/${anecdoteToUpdate.id}`, anecdoteToUpdate)
    return response.data
}