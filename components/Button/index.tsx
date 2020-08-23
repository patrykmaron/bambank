import styled from "styled-components";

export const Button = styled.button`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  margin-top: 2.5rem;
  border-radius: 1.1rem;
  width: 225px;
  border: none;
  padding: 1rem 2rem;
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
  :hover {
    color: ${({ theme }) => theme.colors.link};
    text-shadow: 0 -1px 0 rgba(${({ theme }) => theme.colors.shadow}, 0.08),
      0 1px 0 rgba(${({ theme }) => theme.colors.light}, 1),
      0 0 1px rgba(${({ theme }) => theme.colors.light}, 0.7),
      0 0 4px rgba(${({ theme }) => theme.colors.glow}, 0.08),
      0 0 8px rgba(${({ theme }) => theme.colors.glow}, 0.08);
    box-shadow: inset 1px 1px 1px rgba(${({ theme }) => theme.colors.light}, 1),
      -3px -3px 3px rgba(${({ theme }) => theme.colors.light}, 1),
      -5px -5px 6px rgba(${({ theme }) => theme.colors.light}, 1),
      -10px -10px 16px rgba(${({ theme }) => theme.colors.light}, 1),
      -14px -14px 24px rgba(${({ theme }) => theme.colors.light}, 1),
      inset -1px -1px 1px rgba(${({ theme }) => theme.colors.shadow}, 0.06),
      3px 3px 3px rgba(${({ theme }) => theme.colors.shadow}, 0.085),
      5px 5px 6px rgba(${({ theme }) => theme.colors.shadow}, 0.085),
      10px 10px 16px rgba(${({ theme }) => theme.colors.shadow}, 0.085),
      14px 14px 24px rgba(${({ theme }) => theme.colors.shadow}, 0.085);
  }
  :active {
    box-shadow: 1px 1px 1px rgba(${({ theme }) => theme.colors.light}, 1),
      inset -2px -2px 2px rgba(${({ theme }) => theme.colors.light}, 0.9),
      inset -3px -3px 4px rgba(${({ theme }) => theme.colors.light}, 0.9),
      inset -6px -6px 12px rgba(${({ theme }) => theme.colors.light}, 0.9),
      inset -8px -8px 16px rgba(${({ theme }) => theme.colors.light}, 0.9),
      -1px -1px 1px rgba(${({ theme }) => theme.colors.shadow}, 0.06),
      inset 2px 2px 2px rgba(${({ theme }) => theme.colors.shadow}, 0.08),
      inset 3px 3px 4px rgba(${({ theme }) => theme.colors.shadow}, 0.08),
      inset 6px 6px 12px rgba(${({ theme }) => theme.colors.shadow}, 0.08),
      inset 8px 8px 16px rgba(${({ theme }) => theme.colors.shadow}, 0.08);
  }
`;
