import styled from "styled-components";

export const Input = styled.input`
  margin-top: 1.5rem;
  display: inline-block;
  height: 60px;
  width: 90%;
  padding: 0 1rem;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  line-height: 60px;
  border: none;
  border-radius: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.background};
  box-shadow:
  inset 1px 1px 1px rgba( ${({ theme }) => theme.colors.light}, 0.4 ),
  inset -1px -1px 1px rgba( ${({ theme }) => theme.colors.shadow}, 0.04 ),
  
  inset 0 0 0 2px  ${({ theme }) => theme.colors.background},
  
  inset -2px -2px 2px 2px rgba(${({ theme }) => theme.colors.light}, 0.4), 
  inset -4px -4px 4px 2px rgba( ${({ theme }) => theme.colors.light}, 0.4),
  -1px -1px 4px 0px rgba( ${({ theme }) => theme.colors.light}, 0.4), 
  -2px -2px 8px 0px rgba( ${({ theme }) => theme.colors.light}, 0.4),

  inset 2px 2px 2px 2px rgba( ${({ theme }) => theme.colors.shadow}, 0.04),
  inset 4px 4px 4px 2px rgba( ${({ theme }) => theme.colors.shadow}, 0.04),
  1px 1px 4px 0px rgba( ${({ theme }) => theme.colors.shadow}, 0.04), 
  2px 2px 8px 0px rgba( ${({ theme }) => theme.colors.shadow}, 0.04)
  ;
}

`;
