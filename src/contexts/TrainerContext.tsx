import { createContext, ReactNode, useEffect, useReducer } from "react";
import { toggleTextToSpeechAction, changeTextToSpeechVolumeAction, toggleDateFadeOutAction, changeDateFadeOutDurationAction } from "../reducers/settings/actions";
import { settingsReducer, SettingsState } from "../reducers/settings/reducer";

interface TrainerContextType {
  settings: SettingsState;
  toggleTextToSpeech: () => void;
  changeTextToSpeechVolume: (volume: number) => void;
  toggleDateFadeOut: () => void;
  changeDateFadeOutDuration: (duration: number) => void;
}

interface TrainerContextProviderProps {
  children: ReactNode;
}

export const TrainerContext = createContext({} as TrainerContextType)

const SETTINGS_STORAGE_KEY = "DoomsdayAlgorithm:settings"

export function TrainerContextProvider({ children }: TrainerContextProviderProps) {
  const [settings, dispatch] = useReducer(settingsReducer, {
    textToSpeech: {
      active: true,
      volume: 0.7,
    },
    dateFadeOut: {
      active: true,
      duration: 3,
    }
  }, (initialState) => {
    const storedSettings = localStorage.getItem(SETTINGS_STORAGE_KEY)

    if(storedSettings) {
      return JSON.parse(storedSettings)
    } else return initialState
  })

  function toggleTextToSpeech() {
    dispatch(toggleTextToSpeechAction())
  }

  function changeTextToSpeechVolume(volume: number) {
    dispatch(changeTextToSpeechVolumeAction(volume))
  }

  function toggleDateFadeOut() {
    dispatch(toggleDateFadeOutAction())
  }

  function changeDateFadeOutDuration(duration: number) {
    dispatch(changeDateFadeOutDurationAction(duration))
  }

  useEffect(() => {
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings))
  }, [settings])

  return (
    <TrainerContext.Provider
      value={{
        settings,
        toggleTextToSpeech,
        changeTextToSpeechVolume,
        toggleDateFadeOut,
        changeDateFadeOutDuration,
      }}
    >
      {children}
    </TrainerContext.Provider>
  )
}
