import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center py-4 px-8 bg-emerald-800 justify-between'>
        <h2 className='text-xl font-bold'>Krish</h2>
        <div className='flex gap-8'>
          <Link className='text-lg font-bold' to='/'>Home</Link>
          <Link className='text-lg font-bold' to='/about'>About</Link>
          <Link className='text-lg font-bold' to='/contact'>Contact</Link>
          <Link className='text-lg font-bold' to='/blabla'>blabla</Link>
        </div>
    </div>
  )
}

export default Navbar