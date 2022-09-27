import styled from 'styled-components'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

export const ButtonsContainer = styled(ToggleGroup.Root)`
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

export const WeekdayButton = styled(ToggleGroup.Item)`
  width: 150px;
  background-color: ${(props) => props.theme['gray-600']};
  color: ${(props) => props.theme['green-100']};
  transition: 0.5s;
  border: none;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: 700;
  padding: 0.75rem;
  position: relative;

  span {
    font-size: 0.875rem;
    position: absolute;
    top: -0.35rem;
    left: 0.35rem;
  }

  &:hover {
    background-color: ${(props) => props.theme['gray-300']};
    color: ${(props) => props.theme['green-700']};
    cursor: pointer;
  }
`