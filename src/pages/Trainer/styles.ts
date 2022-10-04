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

    svg {
      color: ${(props) => props.theme['gray-100']};
      transition: 0.3s;

      &:hover {
        cursor: pointer;
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
