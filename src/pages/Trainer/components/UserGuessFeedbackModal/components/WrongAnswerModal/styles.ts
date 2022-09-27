import styled from 'styled-components'

export const RightAnswerModalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`
export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme['red-500']};
`

export const Time = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme['red-700']};
`
