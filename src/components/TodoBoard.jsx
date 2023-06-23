import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { delTodo } from '../redux/modules/todos';
import { switchDone } from '../redux/modules/todos';
import { Link } from 'react-router-dom';

const TodoWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0 2vw;
`;
const TodoH2 = styled.h2`
    padding: 20px 0;
    font-weight: bold;
`;
const Todo = styled.div`
    width: calc((100% - 6vw) / 4);
    border: solid 3px rgb(162, 162, 162);
    padding: 15px;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    transition: all 0.4s;
    margin: 0 0 15px;
    p {
        height: 3rem;
        width: 100%;
    }
`;
const TodoTit = styled.h3`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
    width: 100%;
`;
const TodoBtn = styled.button`
    width: 48%;
    color: ${(props) => props.color};
    margin-right: 2%;
    margin-top: 18px;
    height: 35px;
    border-radius: 5px;
    border: solid 1px #ddd;
    background-color: #fff;
    align-items: flex-end;
    transition: all 0.3s;
    &:last-child {
        margin-right: 0;
    }
    &:hover {
        background-color: ${(props) => props.color};
        color: #fff;
    }
`;
const DivLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #efefef;
    margin: 20px 0;
`;
const linkStyle = {
    textDecoration: 'none',
    paddingBottom: '20px',
    color: '#555555'
};

function TodoBoard() {
    const todos = useSelector((state) => state.todos.todolists);
    const dispatch = useDispatch();
    const delTodoHandle = (id) => {
        dispatch(delTodo(id));
    };
    const switchDoneHandle = (id) => {
        dispatch(switchDone(id));
    };

    return (
        <section>
            <div className="working">
                <TodoH2>Working</TodoH2>
                <TodoWrap>
                    {todos
                        .filter((todo) => todo.isDone === false)
                        .map((todo) => {
                            return (
                                <Todo key={todo.id} id={todo.id}>
                                    <Link to={`/detail/${todo.id}`} style={linkStyle}>
                                        상세보기
                                    </Link>
                                    <TodoTit>{todo.title}</TodoTit>
                                    <p>{todo.contents}</p>
                                    <TodoBtn color="red" onClick={() => delTodoHandle(todo.id)}>
                                        삭제
                                    </TodoBtn>
                                    <TodoBtn color={todo.isDone ? 'rgb(162, 162, 162)' : 'rgb(13, 173, 198)'} onClick={() => switchDoneHandle(todo.id)}>
                                        {todo.isDone ? '취소' : '완료'}
                                    </TodoBtn>
                                </Todo>
                            );
                        })}
                </TodoWrap>
            </div>
            <DivLine />
            <div className="done">
                <TodoH2>Done</TodoH2>
                <TodoWrap>
                    {todos
                        .filter((todo) => {
                            return todo.isDone === true;
                        })
                        .map((todo) => {
                            return (
                                <Todo key={todo.id} id={todo.id}>
                                    <Link to={`/detail/${todo.id}`} style={linkStyle}>
                                        상세보기
                                    </Link>
                                    <TodoTit>{todo.title}</TodoTit>
                                    <p>{todo.contents}</p>
                                    <TodoBtn color="red" onClick={() => delTodoHandle(todo.id)}>
                                        삭제
                                    </TodoBtn>
                                    <TodoBtn color="rgb(162, 162, 162)" onClick={() => switchDoneHandle(todo.id)}>
                                        {todo.isDone ? '취소' : '완료'}
                                    </TodoBtn>
                                </Todo>
                            );
                        })}
                </TodoWrap>
            </div>
        </section>
    );
}

export default TodoBoard;
