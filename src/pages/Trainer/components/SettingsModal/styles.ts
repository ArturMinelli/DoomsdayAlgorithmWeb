import styled, { css } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'

export const SettingsModalContent = styled(Dialog.Content)`
  width: 26rem;
  background-color: ${(props) => props.theme['gray-800']};
  border: 2px solid ${(props) => props.theme['green-500']};
  border-radius: 6px;
  box-shadow: none;

  &:focus {
    box-shadow: none;
  }

  @media (max-width: 600px) {
   width: 95vw;
  }
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
  padding-top: 1.5rem;
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
  width: 100%;
  position: relative;
  z-index: 5;
  margin-top: 4rem;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const SettingsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme['gray-600']};
  padding: 1.5rem 1.25rem;
  gap: 1.5rem;
  border-radius: 8px;
  box-shadow: -3px 3px 15px 5px ${(props) => props.theme['gray-900']};

  label {
    font-weight: bold;
    text-shadow: -2px 2px 8px black;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const StyledCheckbox = styled(Checkbox.Root)`
  width: 1.25rem;
  height: 1.25rem;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme['gray-600']};
  box-shadow: -1px 1px 5px 1.6px ${(props) => props.theme['gray-900']};

  svg {
    color: ${(props) => props.theme['green-100']};
  }

  &:focus {
    box-shadow: -1px 1px 5px 1.6px ${(props) => props.theme['gray-900']};
  }
`
