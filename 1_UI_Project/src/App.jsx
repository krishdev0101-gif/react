import React from 'react'
import Section1 from './components/Section 1/Section1'
import Section2 from './components/Section 2/Section2'


const App = () => {

  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: '#3b82f6',
      tag: 'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1675626492077-ca5c1124ee69?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',
      intro: '',
      color: '#3b82f6',
      tag: 'Underserved'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1674128810658-b3dd02458779?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYyfHx8ZW58MHx8fHx8',
      intro: '',
      color: '#22C55E',
      tag: 'Underbanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1748785826435-83c5062a5737?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: '#3b82f6',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1701271562832-10f408044aa8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: '#3b82f6',
      tag: 'Satisfied'
    }

  ]

  return (
    <div>
      <Section1 user={users} />
      <Section2 />
    </div>
  )
}

export default App