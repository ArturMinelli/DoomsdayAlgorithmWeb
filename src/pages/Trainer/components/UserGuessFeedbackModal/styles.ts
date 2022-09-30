import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const FeedbackDialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
`

export const FeedbackDialogContent = styled(Dialog.Content)`
  position: fixed;
  width: 480px;
  height: 600px;
  background: ${(props) => props.theme['gray-700']};
  padding: 3rem;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-240px, -300px);
  border: 4px solid ${(props) => props.theme['gray-500']};
  border-radius: 6px;

  &:focus {
    box-shadow: none;
  }
`
