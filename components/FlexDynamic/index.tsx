import styled from "styled-components";

interface FlexDynamic {
  transaction?: boolean;
}

export const FlexDynamic = styled.div`
  display: flex;
  margin: 0;
  ${(props: FlexDynamic) =>
    props.transaction
      ? `
  flex-direction: row;
  justify-content: space-between;
    align-items: center;
  `
      : `
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  `}
`;

export const FlexItem = styled.div`
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;
