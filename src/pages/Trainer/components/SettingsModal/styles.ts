import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const SettingsModalContent = styled(Dialog.Content)`
  width: 26rem;
  background-color: ${(props) => props.theme['gray-800']};
  border: 2px solid ${(props) => props.theme['green-500']};
  border-radius: 6px;

  box-shadow: none;
`
export const SettingsModalOverlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
`

export const SettingsHeader = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme['green-500']};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0 0 0;
  position: relative;

  button {
    color: ${(props) => props.theme['gray-100']};
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;

    &:hover {
      cursor: pointer;
    }
  }
`

export const SettingsForm = styled.form`
  position: relative;
  z-index: 5;
  text-align: center;
  margin: 2rem 0;
  padding: 10px 0;
`
