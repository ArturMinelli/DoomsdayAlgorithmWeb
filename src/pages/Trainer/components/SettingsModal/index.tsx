import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, X } from 'phosphor-react';
import { ModalWave } from '../../../../components/ModalWave';
import { SettingsModalContent, SettingsModalOverlay, SettingsHeader, SettingsForm, SettingsSection, StyledCheckbox } from './styles'
import { useTrainer } from '../../../../hooks/useTrainer';
import { SliderInput } from './components/Slider';

export function SettingsModal() {
  const {
    textToSpeech,
    dateFadeOut,
    handleToggleTextToSpeech,
    handleChangeTextToSpeechValue,
    handleToggleDateFadeOut,
    handleChangeDateFadeOutValue,
  } = useTrainer()

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
          <SettingsSection>
            <div>
              <label htmlFor="tts">Text to Speech</label>
              <StyledCheckbox checked={textToSpeech.active} onCheckedChange={handleToggleTextToSpeech} >
                <Checkbox.Indicator>
                  <Check size={18} weight="bold" />
                </Checkbox.Indicator>
              </StyledCheckbox>
            </div>

            <SliderInput
              defaultValue={[textToSpeech.volume]}
              disabled={!textToSpeech.active}
              onValueChange={handleChangeTextToSpeechValue}
            />

          </SettingsSection>
          <SettingsSection>
            <div>
              <label htmlFor="fadeOut">Date fade-out</label>
              <StyledCheckbox checked={dateFadeOut.active} onCheckedChange={handleToggleDateFadeOut} >
                <Checkbox.Indicator>
                  <Check size={18} weight="bold" />
                </Checkbox.Indicator>
              </StyledCheckbox>
            </div>

            <SliderInput
              defaultValue={[dateFadeOut.duration]}
              disabled={!dateFadeOut.active}
              onValueChange={handleChangeDateFadeOutValue}
            />

          </SettingsSection>
        </SettingsForm>
      </SettingsModalContent>
    </SettingsModalOverlay>
  )
}