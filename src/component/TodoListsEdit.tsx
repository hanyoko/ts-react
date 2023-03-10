import React from 'react';
import { useTodoDispatch, useTodoState } from '../context/TodoContext';

const TodoListsEdit = () => {
    const state = useTodoState();       //useContext(TodoStateContext) --> state 리턴
    const dispatch = useTodoDispatch(); //useContext(TodoDispatchContext)
    const onDelTodo = (id:number) => {
        dispatch({type:"DELTODO", id: id})
    }
    const onToggletodo = (id:number) => {
        dispatch({type:"TOGGLETODO", id:id})
    }
    return (
        <div>
            <ul>
                {state.map(todo=><li key={todo.id} style={{background:todo.isDone ? "yellow" : undefined}}>
                <span onClick={()=>onToggletodo(todo.id)}>{todo.text}</span>
                <button onClick={()=>onDelTodo(todo.id)}>삭제</button></li>)}
            </ul>        
        </div>
    );
};

export default TodoListsEdit;