import React, {useEffect, useState} from 'react'
import TodomainView from './template/TodomainView'
import { v4 as uuidv4 } from 'uuid';
import { load, save } from '../../utils/LocalStorageServices';
import localStorageKeys from '../../utils/LocalStorageKey';

function TodoContainer() {
    const [todoList, setTodoList]= useState([]);;

    const createTodo = (todo) => {
        const newtodoList = [...todoList, {id: uuidv4(), task: todo, completed: false}]
        setTodoList(newtodoList);

        const lstResult = save (localStorageKeys.todos, newtodoList)
        if (!lstResult) {
            console.log(lstResult);
        }
      
    }

    const deleteTodo = (id) => {
        const newtodoList = todoList.filter(todo => todo.id !== id);
        setTodoList(newtodoList);
        
        const lstResult = save(localStorageKeys.todos, newtodoList)
        if (!lstResult) {
            console.log(lstResult);
        }
    };

    const checkComplete = (id) => {
        const newtodoList = todoList.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
        setTodoList(newtodoList);
        
        const lstResult = save(localStorageKeys.todos, newtodoList)
        if (!lstResult) {
            console.log(lstResult);
        }
    }

    useEffect(() => {
        const savedTodos = load(localStorageKeys.todos) || [];
        setTodoList(savedTodos);
    }, [])

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