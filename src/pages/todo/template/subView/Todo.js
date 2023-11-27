import React from 'react'
import icons from '../../../../values/icon'

function Todo({todo, deleteTodo, checkComplete}) {
    let line = todo.completed && ' line-through';
  return (
        <div className='flex w-[608px] items-center flex-row space-x-[8px]'>
            <input
                type='checkbox'
                defaultChecked={todo.completed}
                onChange={() => checkComplete(todo.id)}
                className='h-[24px] w-[24px] accent-blue'
            />
            <p 
                className={
                    'w-full text-black text-[18px] font-medium pb-[1px] flex-wrap break-all text-clip' + line
                }
            >
                {todo.task}
            </p>
            <div onClick={() => deleteTodo(todo.id)} className='pb-[2px]'>
                <icons.DeleteOutlineIcon style={{color: '#BDBDBD'}} />
            </div>
        </div>
  )
}

export default Todo