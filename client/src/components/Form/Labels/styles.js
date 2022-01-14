import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    & > span {
        padding: 2px 4px;
        background: #42a5f5;
        border-radius: 5px;
        margin-left: 5px;
        color: #f3e5f5;
        cursor: pointer;
    }
`;
