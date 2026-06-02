import React from 'react'
import { useState } from 'react';
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, details })

    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]

    copyTask.splice(idx, 1)

    setTask(copyTask);
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 flex-col items-start p-10 '>

        <h1 className='text-4xl font-bold'>Add Notes</h1>

        {/* PHELA INPUT FOR HEADING */}
        <input
          type="text"
          placeholder='Enter Your Title'
          className='px-5 py-2 font-medium w-full border-2 outline-none rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        {/* DETAILED VALA INPUT */}
        <textarea
          type="text"
          placeholder='Enter Your Note'
          className='px-5 h-30 py-2 scrollbar-none font-medium w-full border-2 outline-none rounded'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button className='bg-white text-black active:bg-red-300 font-medium active:scale-95 outline-none px-5 py-2 w-full rounded'>Add Note</button>

      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>

        <h1 className='text-4xl font-bold'>Recent Notes</h1>

        <div className='flex gap-5 flex-wrap items-start justify-start mt-5 h-[90%] overflow-auto'>

          {task.map(function (elem, idx) {

            return <div key={idx} className="relative h-52 w-40 rounded-2xl pt-8 pb-5 px-4 text-black bg-white">

              <h2 onClick={() => {
                deleteNote(idx)
              }} className='absolute z-10 cursor-pointer active:scale-95 top-4 right-5  bg-red-500 p-1 text-xl rounded-full'><X size={16} color='#ffffff' strokeWidth={2.75} /></h2>

              <div className="w-full h-full overflow-auto scrollbar-none mt-2">

                <h3 className='leading-tight mt-4 text-xl font-bold'>{elem.title}</h3>

                <p className='mt-2 text-sm leading-tight font-semibold text-gray-600'>{elem.details}</p>

              </div>

            </div>
          })}

        </div>

      </div>

    </div>
  )
}

export default App