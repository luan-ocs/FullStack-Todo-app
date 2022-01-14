import styled from 'styled-components';

export const CardHeader = styled.div`
    & > h6 {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.8);
        display: block;
    }
    & > span {
        color: rgba(0, 0, 0, 0.6);
    }
    & > h4 {
        font-size: 28px;
        color: rgba(0, 0, 0, 0.8);
        margin-top: 15px;
        font-weight: bold;
    }
    & > p {
        color: rgba(0, 0, 0, 0.6);
        margin-top: 10px;
    }
`;

export const CardMain = styled.div`
    display: flex;
    width: 100%;
    margin-top: 15px;
    height: 250px;
    overflow-y: auto;
`;