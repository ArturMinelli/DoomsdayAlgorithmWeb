import styled from 'styled-components'

export const StartButtonContainer = styled.button`
  width: 250px;
  color: ${(props) => props.theme['gray-100']};
  transition: 0.25s;
  font-family: 'Roboto Mono', monospace;
  font-size: 3rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['gray-600']};
  padding: 0.75rem 0;
  border-radius: 9999px;
  border: 3px solid ${(props) => props.theme['green-500']};

  &.pressed {
   color: ${(props) => props.theme['green-100']};
  }

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme['green-100']};
  }
`