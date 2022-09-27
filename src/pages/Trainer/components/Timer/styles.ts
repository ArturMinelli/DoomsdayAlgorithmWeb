import styled from 'styled-components'

export const TimerContainer = styled.div`
  width: 250px;
  color: ${(props) => props.theme['gray-100']};
  font-family: 'Roboto Mono', monospace;
  font-size: 3rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  background: ${(props) => props.theme['gray-600']};
  padding: 0.75rem 0;
  border-radius: 9999px;
  border: 3px solid ${(props) => props.theme['green-500']};
`

export const Separator = styled.span`
  color: ${(props) => props.theme['green-500']};
`