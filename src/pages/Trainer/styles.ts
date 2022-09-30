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
