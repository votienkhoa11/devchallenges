import React, {useState} from 'react'
import Todo from './subView/Todo';

function TodomainView(props) {
    const {
        //values
        todoList,
        //functions
        createTodo,
        deleteTodo,
        checkComplete,
    } = props;

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            createTodo(value);

            setValue('');
        }
    }

  return (
    <div className='flex flex-col items-center h-screen w-screen pt-[32px]'>
        <h1 className='text-[24px] text-dark-charcoal font-bold'>#Todos</h1>
        <div className='w-[608px] flex flex-row mt-[50px] space-x-36 justify-center'>
            <button className='button-tab'>All</button>
            <button className='button-tab'>Active</button>  
            <button className='button-tab'>Completed</button>
        </div>
        <div className='w-[608px] h-[1px] bg-gray-1'/>
        <form 
            className='flex space-x-[25px] mt-[18px]'
            onSubmit={handleSubmit}
        >
            <input
                placeholder='add details'
                value={value}
                onChange={ (e) => setValue(e.target.value)}
                className='w-[476px] h-[56px] border-[1px] rounded-xl px-3 border-silver-old'
            />
            <button
                type='submit'
                className='rounded-xl bg-blue-58 w-[109px] h-[56px] text-white font-semibold'
            >
                Add
            </button>
        </form>
        <div className='space-y-[24px] mt-[20px]'>
            {
                todoList.map((value) => {
                    return <Todo
                            key={value.id}
                            todo={value}
                            deleteTodo={deleteTodo} 
                            checkComplete={checkComplete}
                        />
                })
            }
        </div>
    </div>
  )
}

export default TodomainView