import React from 'react';
import { styled } from 'styled-components';

const StHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    font-weight: bold;
    padding: 20px 0;
`;

function Header() {
    return (
        <StHeader>
            <span>My Todo List ✅</span>
            <span>React</span>
        </StHeader>
    );
}

export default Header;
