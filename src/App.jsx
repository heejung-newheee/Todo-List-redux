import { styled } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import './App.css';
import { useState, useEffect } from 'react';

const Layout = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;
const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    font-weight: bold;
    padding: 20px 0;
`;

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

// todo
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
    }
`;
const TodoTit = styled.h3`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
    width: 100%;
`;
const TodoP = styled.p`
    width: '100%';
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
function App() {
    // 랜덤 아이디 생성
    const randomID = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    // todo 초기 상태값
    const initialState = [
        {
            id: randomID(),
            title: '제목입니다',
            contents: '내용을 입력해 주세요',
            isDone: false
        }
    ];
    const [todos, setTodos] = useState(initialState);

    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    useEffect(() => {
        const localData = localStorage.getItem('todo-list');
        if (localData !== null) {
            setTodos(JSON.parse(localData));
        } else {
            setTodos(todos);
        }
    }, []);

    const addTodo = () => {
        const addTodo = {
            id: randomID(),
            title,
            contents,
            isDone: false
        };
        if (!title) {
            alert('제목을 입력해 주세요');
        } else if (!contents) {
            alert('내용을 입력해 주세요');
        } else {
            const newTodos = [...todos, addTodo];
            setTodos(newTodos);
            localStorage.setItem('todo-list', JSON.stringify(newTodos));
            setTitle('');
            setContents('');
        }
    };
    const delTodo = (id) => {
        const restTodos = todos.filter((item) => {
            return item.id !== id;
        });
        setTodos(restTodos);
        localStorage.setItem('todo-list', JSON.stringify(restTodos));
    };
    const changeDone = (id) => {
        const changeTodo = todos.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item));
        setTodos(changeTodo);
        localStorage.setItem('todo-list', JSON.stringify(changeTodo));
    };
    return (
        <Layout>
            <Header>
                <span>My Todo List ✅</span>
                <span>React</span>
            </Header>
            <main>
                <GlobalStyle />
                <section>
                    {/* input 영역 */}
                    <InputArea>
                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                            }}>
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
                            <AddBtn type="submit" onClick={addTodo}>
                                추가하기
                            </AddBtn>
                        </form>
                    </InputArea>
                </section>
                <section>
                    {/* contents 영역 */}
                    <div className="working">
                        <TodoH2>Working</TodoH2>
                        <TodoWrap>
                            {todos
                                .filter((todo) => {
                                    return todo.isDone === false;
                                })
                                .map((todo) => {
                                    return (
                                        <Todo key={todo.id} id={todo.id}>
                                            {todo.id},{todo.isDone.toString()}
                                            <TodoTit>{todo.title}</TodoTit>
                                            <TodoPtag>{todo.contents}</TodoPtag>
                                            <TodoBtn color="red" onClick={() => delTodo(todo.id)}>
                                                삭제
                                            </TodoBtn>
                                            <TodoBtn color="rgb(13, 173, 198)" onClick={() => changeDone(todo.id)}>
                                                {todo.isDone ? '취소' : '완료'}
                                            </TodoBtn>
                                        </Todo>
                                    );
                                })}
                        </TodoWrap>
                    </div>
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
                                            {todo.id},{todo.isDone.toString()}
                                            <TodoTit>{todo.title}</TodoTit>
                                            <TodoP>{todo.contents}</TodoP>
                                            <TodoBtn color="red" onClick={() => delTodo(todo.id)}>
                                                삭제
                                            </TodoBtn>
                                            <TodoBtn color="rgb(162, 162, 162)" onClick={() => changeDone(todo.id)}>
                                                {todo.isDone ? '취소' : '완료'}
                                            </TodoBtn>
                                        </Todo>
                                    );
                                })}
                        </TodoWrap>
                    </div>
                </section>
            </main>
            <footer></footer>
        </Layout>
    );
}

export default App;
