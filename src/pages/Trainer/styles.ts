import styled from 'styled-components'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

export const TrainerContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`

export const RandomDate = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  color: ${(props) => props.theme['green-500']};
  font-size: 1.75rem;
  font-weight: 700;
`

export const Timer = styled.div`
  color: ${(props) => props.theme['gray-100']};
  font-family: 'Roboto Mono', monospace;
  font-size: 3rem;
  font-weight: 800;

  background: ${(props) => props.theme['gray-600']};
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  border: 3px solid ${(props) => props.theme['green-500']};
`

export const WeekdayButton = styled(ToggleGroup.Item)`
  width: 150px;
  background-color: ${(props) => props.theme['gray-600']};
  color: ${(props) => props.theme['green-100']};
  border: none;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: 700;
  padding: 0.75rem;
  position: relative;

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['green-100']};
    position: absolute;
    top: -0.35rem;
    left: 0.35rem;
  }

  &:hover {
    background-color: ${(props) => props.theme['gray-300']};
    color: ${(props) => props.theme['green-700']};
    transition: background-color 0.5s;
    transition: color 0.5s;
    cursor: pointer;
  }
`

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

export const Separator = styled.span`
  color: ${(props) => props.theme['green-500']};
`
