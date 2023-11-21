import React from 'react'

function Todo() {
  return (
    <div className='flex flex-col items-center h-screen w-screen pt-[32px]'>
        <h1 className='text-[24px] text-dark-charcoal font-bold'>#Todos</h1>
        <div className=' w-[608px] flex flex-row mt-[50px] space-x-36 justify-center'>
            <button className='button-tab'>All</button>
            <button className='button-tab'>Active</button>  
            <button className='button-tab'>Completed</button>
        </div>
        <div className='w-[608px] h-[1px] bg-gray-1'/>
        <div className='flex space-x-[25px] mt-[18px]'>
            <input
                className='w-[476px] h-[56px] border-[1px] rounded-xl px-3 border-silver-old'
                placeholder='add details'
            />
            <button className='rounded-xl bg-blue-58 w-[109px] h-[56px] text-white font-semibold'>Add</button>
        </div>
    </div>
  )
}

export default Todo