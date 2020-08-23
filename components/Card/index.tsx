import styled from "styled-components";

export const Card = styled.div`
  text-align: center;
  margin-top: 2rem;
  border-radius: 1.1rem;
  width: 75vw;
  padding: 2rem;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: inset 1px 1px 1px rgba(${({ theme }) => theme.colors.light}, 1),
    -2px -2px 2px rgba(${({ theme }) => theme.colors.light}, 0.9),
    -4px -4px 6px rgba(${({ theme }) => theme.colors.light}, 0.9),
    -8px -8px 16px rgba(${({ theme }) => theme.colors.light}, 0.9),
    -12px -12px 24px rgba(${({ theme }) => theme.colors.light}, 0.9),
    inset -1px -1px 1px rgba(${({ theme }) => theme.colors.shadow}, 0.06),
    2px 2px 2px rgba(${({ theme }) => theme.colors.shadow}, 0.08),
    4px 4px 6px rgba(${({ theme }) => theme.colors.shadow}, 0.08),
    8px 8px 16px rgba(${({ theme }) => theme.colors.shadow}, 0.08),
    12px 12px 24px rgba(${({ theme }) => theme.colors.shadow}, 0.08);
  -webkit-transition: box-shadow 0.6s;
  transition: box-shadow 0.6s;
  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const TransactionCard = styled.div`
  width: auto;
  position: relative;
  padding: 1rem;
  background: white;
  margin-top: 1rem;
  text-align: left;
`;

export default Card;
