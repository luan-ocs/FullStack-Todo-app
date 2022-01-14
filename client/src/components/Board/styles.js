import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 50px;
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;
