import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import { styled } from 'styled-components';

const Router = () => {
    return (
        <BrowserRouter>
            <StyleDiv>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/detail/:id" element={<Detail />} />
                </Routes>
            </StyleDiv>
        </BrowserRouter>
    );
};

export default Router;

const StyleDiv = styled.div`
    color: ${({ theme }) => {
        // console.log(theme);
        return theme.color.fontColor;
    }};
    background-color: ${({ theme }) => theme.color.backgroundColor};
`;
