import { useState } from 'react';
import './App.css';
import Router from './shared/Router';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme, darkTheme, lightTheme } from './redux/modules/theme';

function App() {
    const dispatch = useDispatch();

    const theme = useSelector((state) => state.theme);

    return (
        <ThemeProvider theme={theme}>
            <button onClick={() => dispatch(setTheme('color', darkTheme))}>다크</button>

            <button onClick={() => dispatch(setTheme('color', lightTheme))}>라이트</button>

            <select
                onChange={(event) => {
                    dispatch(setTheme('font', event.target.value));
                }}>
                <option value="10px">작게</option>
                <option value="16px">보통</option>
                <option value="24px">크게</option>
            </select>
            <Router />
        </ThemeProvider>
    );
}

export default App;
