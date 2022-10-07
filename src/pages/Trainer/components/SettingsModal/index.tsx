import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { ModalWave } from '../../../../components/ModalWave';
import { SettingsModalContent, SettingsModalOverlay, SettingsHeader, SettingsForm } from './styles'

export function Ssss() {
  return (
    <SettingsModalOverlay>
      <SettingsModalContent>
        <input type="checkbox" />
      </SettingsModalContent>
    </SettingsModalOverlay>
  )
}

export function SettingsModal() {
    return (
      <SettingsModalOverlay>
        <SettingsModalContent>
          <SettingsHeader>
            <h1>Settings</h1>
            <Dialog.Close>
              <X size={16} weight="bold" />
            </Dialog.Close>
          </SettingsHeader>
          <ModalWave />
          <SettingsForm>
              <div>
                <label htmlFor="tts">Text to Speech</label>
                <input id="tts" type="checkbox" />
                <input type="range" />
              </div>
              <div>
                <label htmlFor="fadeOut">Date fade-out</label>
                <input id="fadeOut" type="checkbox" />
                <input type="range" />
              </div>
            </SettingsForm>
        </SettingsModalContent>
      </SettingsModalOverlay>
    )
}