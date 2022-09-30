import styled, { css } from 'styled-components'

export const ButtonsContainer = styled.div`
  width: 420px;
  margin: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;

  &:focus {
    box-shadow: none;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
`

export const WeekdayButton = styled.button`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['gray-600']};
  color: ${(props) => props.theme['green-100']};
  transition: background 0.5s, color 0.5s;
  border: none;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: 700;
  padding: 0.75rem;
  position: relative;
  user-select: none;

  ${({disabled, theme}) => css`
    opacity: ${disabled ? 0.6 : 1};

    /* &:hover {
      background-color: ${disabled ? theme['gray-600'] : theme['gray-300']};
      color: ${disabled ? theme['green-100'] : theme['gray-700']};
      cursor: ${disabled ? 'inherit' : 'pointer'};
    } */
  `}

  span {
    font-size: 0.875rem;
    position: absolute;
    top: -0.35rem;
    left: 0.35rem;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['gray-300']};
    color: ${(props) => props.theme['green-700']};
    cursor: pointer;
  }
`