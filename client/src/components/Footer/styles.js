import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    color: #1976d2;
    height: 30px;
    align-items: center;
    justify-content: center;
    & > svg {
        fill: #d32f2f;
    }
`;
