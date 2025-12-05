const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll = async () => {
  const response = await fetch(baseUrl)

  if (!response.ok) {
    throw new Error('Failed to fetch anecdotes')
  }

  return await response.json()
}

export const createAnecdote = async (content) => {
  const options = {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(content)
  }

  const response = await fetch(baseUrl, options)

  if (!response.ok) {
    const json = await response.json()
    throw new Error(json.error)
  }

  return await response.json()
}

export const voteAnecdote = async (anecdote) => {
  const options = {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      ...anecdote,
      votes: anecdote.votes + 1
    })
  }

  const response = await fetch(`${baseUrl}/${anecdote.id}`, options)

  if (!response.ok) {
    throw new Error('Failed to vote anecdote')
  }

  return await response.json()
}