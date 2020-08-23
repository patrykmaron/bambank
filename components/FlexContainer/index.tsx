import styled from "styled-components";

export const FlexContainer = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  margin: 0;
  flex-direction: column;
  @media (min-width: 768px) {
    justify-content: center;
  }
`;
