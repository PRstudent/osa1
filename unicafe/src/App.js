import React, { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <table class="table">
      <tbody>
        <tr>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Statistics = ({good, bad, neutral}) => {

  let average = 0
  let positive = 0
  let total = good + bad + neutral 

  if(total === 0) {
    return (
      <div>
        No feedpack
      </div>
    )
  }

  else if(total > 0) { 
      average = (good - bad) / total
      positive = good / total  * 100 + ' %'
  }

  return (
    <div>
      <table>
  <tr>
    <td>good</td>
    <td><StatisticLine text='good' value={good}/></td>
  </tr>
  <tr>
    <td>neutral</td>
    <td><StatisticLine text='neutral' value={neutral}/></td>
  </tr>
  <tr>
    <td>bad</td>
    <td><StatisticLine text='bad' value={bad}/></td>
  </tr>
  <tr>
    <td>all</td>
    <td><StatisticLine text='all' value={total}/></td>
  </tr>
  <tr>
    <td>average</td>
    <td><StatisticLine text='average' value={average}/></td>
  </tr>
  <tr>
    <td>positive</td>
    <td><StatisticLine text='positive' value={positive}/> </td>
  </tr>
</table>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () => setGood(good + 1)
  const neutralFeedBack = () => setNeutral(neutral + 1)
  const badFeedBack = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={goodFeedback} text='good'/>
      <Button onClick={neutralFeedBack} text='neutral'/>
      <Button onClick={badFeedBack} text='bad'/>

      <h1>statistics</h1>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App;