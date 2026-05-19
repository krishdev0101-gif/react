import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user='Girl 1' age={20} />
      <Card user='Girl 2' age={21} />
    </div>
  )
}

export default App