import React from 'react';
import { styled } from 'styled-components';
import { useState } from 'react';
import uuid from 'react-uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/modules/todos';

// input
const InputArea = styled.div`
    padding: 30px 20px;
    border-radius: 10px;
    background-color: #efefef;
`;
const Label = styled.label`
    line-height: 35px;
`;
const Input = styled.input`
    margin-right: 50px;
    margin-left: 3px;
    border: 0;
    padding: 10px;
    border-radius: 5px;
`;
const AddBtn = styled.button`
    width: 100px;
    height: 35px;
    float: right;
    border: 0;
    border-radius: 5px;
    background-color: skyblue;
    color: #fff;
    &:hover {
        font-weight: bold;
        background-color: rgb(13, 173, 198);
    }
`;

function InputForm() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        // if (!title) {
        //     alert('제목을 입력해 주세요');
        // } else if (!contents) {
        //     alert('내용을 입력해 주세요');
        // }
        const newAddTodo = {
            id: uuid(),
            title,
            contents,
            isDone: false
        };
        dispatch(addTodo(newAddTodo)); // ...todos...?
        console.log('addTodo', addTodo);
    };

    return (
        <section>
            {/* input 영역 */}
            <InputArea>
                <form onSubmit={submitHandler}>
                    {/* <Link>상세보기</Link> */}
                    <Label style={{ lineHeight: '35px' }}>제목 </Label>
                    <Input
                        type="text"
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />
                    <Label>내용 </Label>
                    <Input
                        type="text"
                        value={contents}
                        onChange={(event) => {
                            setContents(event.target.value);
                        }}
                    />
                    <AddBtn>추가하기</AddBtn>
                </form>
            </InputArea>
        </section>
    );
}

export default InputForm;
