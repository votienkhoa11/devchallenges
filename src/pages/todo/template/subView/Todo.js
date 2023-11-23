import React from 'react'
import icons from '../../../../values/icon'

function Todo({todo, deleteTodo, checkComplete}) {
  return (
        <div className='flex w-[608px] items-center flex-row space-x-[7px]'>
            <input
                type='checkbox'
                defaultChecked={todo.completed}
                onChange={() => checkComplete(todo.id)}
            />
            <p className='w-full text-black text-[18px] font-medium pb-[1px]'>{todo.task}</p>
            <div onClick={() => deleteTodo(todo.id)} className='pb-[2px]'>
                <icons.DeleteOutlineIcon style={{color: '#BDBDBD'}} />
            </div>
        </div>
  )
}

export default Todo