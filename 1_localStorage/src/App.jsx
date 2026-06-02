import React from 'react'

const App = () => {

  // const user = {
  //   username:'Krish',
  //   age:'17',
  //   city:'Ahmdabad'
  // }

  // localStorage.setItem('user', JSON.stringify(user))

  const user = JSON.parse(localStorage.getItem('user'))

  console.log(user);


  return (
    <div>App</div>
  )
}

export default App