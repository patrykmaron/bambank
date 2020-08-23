import styled from "styled-components";

interface H1 {
  align: string;
}

interface H2 {
  align: string;
}

export const H1 = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2rem;
  text-align: left;

  @media (min-width: 768px) {
    text-align: ${(props: H1) => props.align};
  }
`;

export const H2 = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1rem;
  text-align: left;
  @media (min-width: 768px) {
    text-align: ${(props: H2) => props.align};
  }
`;

export default H1;
