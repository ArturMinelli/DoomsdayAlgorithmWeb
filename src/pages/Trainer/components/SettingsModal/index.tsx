import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, X } from 'phosphor-react';
import { ModalWave } from '../../../../components/ModalWave';
import { SettingsModalContent, SettingsModalOverlay, SettingsHeader, SettingsForm, SettingsSection, StyledCheckbox } from './styles'
import { useTrainer } from '../../../../hooks/useTrainer';
import { SliderInput } from './components/Slider';
import { SettingsOptions } from '../../../../contexts/TrainerContext';

export function SettingsModal() {
  const {
    textToSpeech,
    dateFadeOut,
    handleToggleSettingOption,
    handleChangeSettingOptionValue,
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
              <StyledCheckbox
                checked={textToSpeech.active}
                onCheckedChange={() => handleToggleSettingOption(SettingsOptions.TEXT_TO_SPEECH)}
              >
                <Checkbox.Indicator>
                  <Check size={18} weight="bold" />
                </Checkbox.Indicator>
              </StyledCheckbox>
            </div>

            <SliderInput
              defaultValue={[textToSpeech.value]}
              value={[textToSpeech.value]}
              disabled={!textToSpeech.active}
              min={0}
              max={1}
              step={0.01}
              onValueChange={(value) => handleChangeSettingOptionValue(value, SettingsOptions.TEXT_TO_SPEECH)}
            />

          </SettingsSection>
          <SettingsSection>
            <div>
              <label htmlFor="fadeOut">Date fade-out</label>
              <StyledCheckbox
                checked={dateFadeOut.active}
                onCheckedChange={() => handleToggleSettingOption(SettingsOptions.DATE_FADE_OUT)}
              >
                <Checkbox.Indicator>
                  <Check size={18} weight="bold" />
                </Checkbox.Indicator>
              </StyledCheckbox>
            </div>

            <SliderInput
              defaultValue={[dateFadeOut.value]}
              value={[dateFadeOut.value]}
              disabled={!dateFadeOut.active}
              min={0}
              max={5}
              step={0.01}
              onValueChange={(value) => handleChangeSettingOptionValue(value, SettingsOptions.DATE_FADE_OUT)}
            />

          </SettingsSection>
        </SettingsForm>
      </SettingsModalContent>
    </SettingsModalOverlay>
  )
}