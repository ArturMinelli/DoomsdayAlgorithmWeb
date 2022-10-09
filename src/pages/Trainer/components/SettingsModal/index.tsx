import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, X } from 'phosphor-react';
import { ModalWave } from '../../../../components/ModalWave';
import { SettingsModalContent, SettingsModalOverlay, SettingsHeader, SettingsForm, SettingsSection, StyledCheckbox } from './styles'
import { useTrainer } from '../../../../hooks/useTrainer';
import { SliderInput } from './components/Slider';

export function SettingsModal() {
  const {
    settings,
    toggleTextToSpeech,
    changeTextToSpeechVolume,
    toggleDateFadeOut,
    changeDateFadeOutDuration,
  } = useTrainer()
  const { textToSpeech, dateFadeOut } = settings

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
              <StyledCheckbox
                id='tts'
                checked={textToSpeech.active}
                onCheckedChange={() => toggleTextToSpeech()}
              >
                <Checkbox.Indicator>
                  <Check size={18} weight="bold" />
                </Checkbox.Indicator>
              </StyledCheckbox>
            </div>

            <SliderInput
              suffix='%'
              defaultValue={[textToSpeech.volume]}
              value={[textToSpeech.volume]}
              disabled={!textToSpeech.active}
              min={0}
              max={100}
              step={1}
              onValueChange={([value]) => changeTextToSpeechVolume(value)}
            />

          </SettingsSection>
          <SettingsSection>
            <div>
              <label htmlFor="fadeOut">Date fade-out</label>
              <StyledCheckbox
                id='fadeOut'
                checked={dateFadeOut.active}
                onCheckedChange={() => toggleDateFadeOut()}
              >
                <Checkbox.Indicator>
                  <Check size={18} weight="bold" />
                </Checkbox.Indicator>
              </StyledCheckbox>
            </div>

            <SliderInput
              suffix='s'
              defaultValue={[dateFadeOut.duration]}
              value={[dateFadeOut.duration]}
              disabled={!dateFadeOut.active}
              min={0}
              max={5}
              step={0.05}
              onValueChange={([value]) => changeDateFadeOutDuration(value)}
            />

          </SettingsSection>
        </SettingsForm>
      </SettingsModalContent>
    </SettingsModalOverlay>
  )
}