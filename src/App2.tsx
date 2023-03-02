import React from 'react';
import TodoInput from './component/TodoInput';
import TodoListsEdit from './component/TodoListsEdit';
import TodoContext from './context/TodoContext';

const App2 = () => {
    return (
        <TodoContext>
            <TodoInput />
            <TodoListsEdit />
        </TodoContext>
    );
};

export default App2;