import styled  from "styled-components";

export const Container = styled.div`
    background: #fff;
    margin-top: 10px;
    margin-right: 10px;
    width: 30%;
    padding: 10px;
    border-radius: 5px;
    @media (max-width: 820px) {
        width: 50%;
        margin-right: 0;
        margin-left: 30px;
    }

    @media (max-width: 500px) {
        width: 100%;
        margin-left: 0px;
    }
`;

export const FormContainer = styled.form`
    & > div {
        margin-bottom: 10px;
    }
`;