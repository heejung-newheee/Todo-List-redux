import { styled } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import './App.css';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import InputForm from './components/InputForm';
import TodoBoard from './components/TodoBoard';

const Layout = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

function App() {
    // store 접근해 todos 값을 읽어옴 // useSelector
    const todos = useSelector((state) => state.todos);
    console.log('app.jsx-todo', todos);

    return (
        <Layout>
            <Header />
            <main>
                <GlobalStyle />
                <InputForm />
                <TodoBoard />
            </main>
            <footer></footer>
        </Layout>
    );
}

export default App;
