import React, {useState} from 'react'
import TodomainView from './template/TodomainView'
import { v4 as uuidv4 } from 'uuid';

function TodoContainer() {
    const [todoList, setTodoList]= useState([]);;

    const createTodo = (todo) => {
        setTodoList([
            ...todoList,
            {id: uuidv4(), task: todo, completed: false}
        ]);

        console.log(todoList)
    }

    const deleteTodo = (id) => {
        setTodoList(todoList.filter((todo) => todo.id !== id))
    };

    const checkComplete = (id) => {
        setTodoList(
            todoList.map((todo) =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo,
            )
        );
    }

    const todoProps = {
        //values
        todoList,
        //functions
        createTodo,
        deleteTodo,
        checkComplete,
    }

  return <TodomainView {...todoProps} />
}

export default TodoContainer