import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'

export const TrainerContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.75rem;
`

export const ToastContainerStyled = styled(ToastContainer).attrs({
  toastClassName: 'toast',
})`
  .toast {
    background-color: ${(props) => props.theme['gray-800']};
  }
`

export const PressSpaceMessage = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  color: ${(props) => props.theme['green-500']};
  font-size: 1.25rem;
  font-weight: 700;
`

export const TrainerFooter = styled.footer`
  width: 100%;

  button {
    width: 3rem;
    height: 3rem;
    float: right;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled) svg:hover {
      cursor: pointer;
      color: ${(props) => props.theme['green-500']};
    }

    svg {
      color: ${(props) => props.theme['gray-100']};
      transition: 0.3s;
    }
  }
`
