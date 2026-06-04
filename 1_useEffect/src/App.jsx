import { useState } from 'react';
import { useEffect } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)
//   const [num2, setNum2] = useState(100)

//   useEffect(function(){
//     console.log('Run!');
//   },[num])

//   return (

//     <div>
//       <h1>{num}</h1>
//       <h1>{num2}</h1>
//       <button onClick={()=>{
//         setNum(num+1)
//         setNum2(num2+10)
//       }}>click</button>
//     </div>
//   )
// }

// export default App





const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging() {
    console.log('A value Changed');
  }

  function bChanging() {
    console.log('B value Changed');
  }

  useEffect(function() {
    aChanging()
    console.log('use effect is running...');
  }, [a])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{
        setA(a+1)
      }}>Change A</button>
      <button onClick={()=>{
        setB(b-1)
      }}>Change B</button>
    </div>
  )
}

export default App