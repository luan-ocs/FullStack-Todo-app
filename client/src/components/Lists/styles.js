import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  margin-top: 10px;
  margin-left: 30px;
  display: flex;

  flex-wrap: wrap;

  & > div {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;
