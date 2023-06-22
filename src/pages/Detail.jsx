import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

const DetailWrap = styled.div`
    width: 20vw;
    min-width: 320px;
    height: 20vw;
    min-height: 320px;
    padding: 20px;
    border: solid 1px #ddd;
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
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
const SpanTag = styled.span`
    display: block;
    font-size: 0.8em;
    padding-bottom: 10px;
    color: #666;
`;
const linkStyle = {
    textDecoration: 'none',
    width: '100%',
    height: '35px',
    borderRadius: '5px',
    border: 'solid 1px #ddd',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#333'
};
function Detail() {
    const todos = useSelector((state) => state.todos.todolists);
    const params = useParams();
    return (
        <div>
            {todos
                .filter((item) => {
                    return item.id === params.id;
                })
                .map((item) => {
                    return (
                        <DetailWrap key={item.id}>
                            <div>ID {item.id.slice(0, 10)}</div>
                            <TodoTit>
                                <SpanTag>제목</SpanTag>
                                {item.title}
                            </TodoTit>
                            <p>
                                <SpanTag>내용</SpanTag>
                                {item.contents}
                            </p>
                            <div>
                                <SpanTag>진행상태</SpanTag>
                                {item.isDone ? '완료' : '미완료'}
                            </div>

                            <Link to="/" style={linkStyle}>
                                이전
                            </Link>
                        </DetailWrap>
                    );
                })}
        </div>
    );
}

export default Detail;
