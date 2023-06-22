import React from 'react';
import Header from '../components/Header';
import InputForm from '../components/InputForm';
import TodoBoard from '../components/TodoBoard';
import { styled } from 'styled-components';
import GlobalStyle from '../GlobalStyle';

const Layout = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

function Home() {
    return (
        <Layout>
            <Header />
            <main>
                <GlobalStyle />
                <InputForm />
                <TodoBoard />
            </main>
        </Layout>
    );
}

export default Home;
