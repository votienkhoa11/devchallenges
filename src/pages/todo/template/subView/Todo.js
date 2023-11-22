import React from 'react'
import icons from '../../../../values/icon'
import { CheckBox } from '@mui/icons-material'

function Todo({todo, deleteTodo, checkComplete}) {
  return (
        <div className='flex w-[608px] items-center flex-row space-x-[7px]'>
            <CheckBox
                defaultChecked
            />
            <p className='w-full text-black text-[18px] font-medium pb-[1px]'>{todo.task}</p>
            <div onClick={() => deleteTodo(todo.id)} className='pb-[2px]'>
                <icons.DeleteOutlineIcon style={{color: '#BDBDBD'}} />
            </div>
        </div>
  )
}

export default Todo