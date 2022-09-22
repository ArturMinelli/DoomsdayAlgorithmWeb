import styled from 'styled-components'

interface RandomdateContainerProps {
  size: string;
}

export const RandomDateContainer = styled.div<RandomdateContainerProps>`
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
  color: ${(props) => props.theme['green-500']};
  font-size: ${(props) => props.size};
  font-weight: 700;
`