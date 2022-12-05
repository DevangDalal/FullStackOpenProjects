import { useState } from "react";

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  const all = good + bad + neutral;
  const average = all > 0 ? roundToTwo((good - bad) / all) : 0;
  const positive = all > 0 ? roundToTwo((good / bad) * 100) : 0;

  if ( all === 0) {
    return <div>No feedback given</div>
  }
  
  return (
    <table>
      <tbody>
        <StatisticsLine text='good' value={good} />
        <StatisticsLine text='neutral' value={neutral} />
        <StatisticsLine text='bad' value={bad} />
        <StatisticsLine text='all' value={all} />
        <StatisticsLine text='average' value={average} />
        <StatisticsLine text='positive' value={positive} />
      </tbody>
    </table>
  )
}

const StatisticsLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const roundToTwo = (num) => Math.round(num * 100 + Number.EPSILON) / 100

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
     <Button handleClick={() => setGood(good + 1)} text='Good' />
     <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral' />
     <Button handleClick={() => setBad(bad + 1)} text='Bad' />
     <h2>Statistics</h2>
     <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App;
