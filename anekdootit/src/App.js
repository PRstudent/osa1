import React, { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <div>
      <button onClick={handleClick}>
       {text}
      </button>
    </div>
  )
}



const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  
  const [votes, setVotes] = useState(anecdotes.map(() => 0))

  const Voting = () => {
    const copy = [...votes]
    copy[selected] +=1
    return setVotes(copy)
  }

  const BestAnecdote = votes.indexOf(Math.max(...votes))

  const [selected, setSelected] = useState(0)

  const getRandomAnecdote = () => {
    return setSelected(Math.floor(Math.random() * anecdotes.length))
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <Button handleClick={Voting} text='vote'/>
      <Button handleClick={getRandomAnecdote} text='next anecdote'/>
      <h2>Anecdote which has most votes</h2>
      <p>{anecdotes[BestAnecdote]} anecdote has {votes[BestAnecdote]} votes</p>
    </div>
  )
}

export default App;
