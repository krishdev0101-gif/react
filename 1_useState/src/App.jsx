import { useState } from 'react'

// const App = () => {

//   const [a, setA] = useState(10)
//   const [username, setUsername] = useState('brooh')

//   function changeA() {
//     setA(20)
//     setUsername('Krish')
//   }

//   return (
//     <div>
//       <h1>Value of a is {a} <br /> Value of user is {username}</h1>
//       <button onClick={changeA}>Click</button>
//     </div>
//   )
// }

// export default App




// const App = () => {

//   const [num, setNum] = useState(0)

//   function increase() {
//     setNum(num+1)
//   }

//   function decrease() {
//     setNum(num-1)
//   }

//   function jump() {
//     setNum(num+5)
//   }

//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={increase} >increase</button>
//       <button onClick={decrease} >decrease</button>
//       <button onClick={jump} >Jump by 5</button>
//     </div>

//   )
// }

// export default App





const App = () => {

  const [num, setnum] = useState({ user: 'Krish', age: "17" })

  const btnClicked = () => {
    const newNum = { ...num };
    newNum.user = 'Krishna'
    setnum(newNum)
  }

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App