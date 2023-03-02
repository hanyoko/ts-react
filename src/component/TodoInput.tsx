import React, { useRef, useState } from 'react';
import { useTodoDispatch } from '../context/TodoContext';

const TodoInput = () => {
    //인푸의 값을 관리할 상태생성
    const [text, setText] = useState("");
    const dispatch = useTodoDispatch(); //useContext() ---> dispatch 리턴
    //인풋의 값이 변경될 때 호출되는 함수
    //text값을 인풋의 값으로 업데이트
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const t = e.target.value;
        setText(t)
    }
    const ref = useRef<number>(4)
    const onAddtodo = () => {
        dispatch({type:"ADDTODO", todo:{
            id: ref.current,
            text: text,
            isDone: false
        }})
        //text 초기화
        setText("");
        //ref.current 값 1씩 증가
        ref.current++;
    }
    return (
        <div>
            <input name='text' value={text} onChange={onChange} />
            <button onClick={onAddtodo}>등록</button>
        </div>
    );
};

export default TodoInput;