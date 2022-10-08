import { createContext, ReactNode, useState } from "react";

interface TrainerContextType {
  textToSpeech: SettingOption;
  dateFadeOut: SettingOption;
  handleToggleSettingOption: (type: string) => void;
  handleChangeSettingOptionValue: (data: number[], type: string) => void;
}

interface TrainerContextProviderProps {
  children: ReactNode;
}

export interface SettingOption {
  active: boolean;
  value: number;
}

export enum SettingsOptions {
  TEXT_TO_SPEECH = "TEXT_TO_SPEECH",
  DATE_FADE_OUT = "DATE_FADE_OUT"
}

export const TrainerContext = createContext({} as TrainerContextType)

export function TrainerContextProvider({ children }: TrainerContextProviderProps) {
  const [textToSpeech, setTextToSpeech] = useState<SettingOption>({
    active: false,
    value: 0.2,
  })
  const [dateFadeOut, setDateFadeOut] = useState<SettingOption>({
    active: false,
    value: 0.2,
  })

  function handleToggleSettingOption(type: string) {
    if(type === SettingsOptions.TEXT_TO_SPEECH) {
      setTextToSpeech((state) => ({
        ...state,
        active: !state.active
      }))
    } else if(type === SettingsOptions.DATE_FADE_OUT) {
      setDateFadeOut((state) => ({
        ...state,
        active: !state.active
      }))
    }
  }

  function handleChangeSettingOptionValue([value]: number[], type: string) {
    if(type === SettingsOptions.TEXT_TO_SPEECH) {
      setTextToSpeech((state) => ({
        ...state,
        value,
      }))
    } else if(type === SettingsOptions.DATE_FADE_OUT) {
      setDateFadeOut((state) => ({
        ...state,
        value,
      }))
    }
  }

  return (
    <TrainerContext.Provider
      value={{
        textToSpeech,
        dateFadeOut,
        handleToggleSettingOption,
        handleChangeSettingOptionValue,
      }}
    >
      {children}
    </TrainerContext.Provider>
  )
}
