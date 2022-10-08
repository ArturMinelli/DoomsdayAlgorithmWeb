import { createContext, ReactNode, useState } from "react";

interface TrainerContextType {
  textToSpeech: TextToSpeech;
  dateFadeOut: DateFadeOut;
  handleToggleTextToSpeech: () => void;
  handleChangeTextToSpeechValue: (data: any) => void;
  handleToggleDateFadeOut: () => void;
  handleChangeDateFadeOutValue: (data: any) => void;
}

interface TrainerContextProviderProps {
  children: ReactNode;
}

export interface TextToSpeech {
  active: boolean;
  volume: number;
}

export interface DateFadeOut {
  active: boolean;
  duration: number;
}

export const TrainerContext = createContext({} as TrainerContextType)

export function TrainerContextProvider({ children }: TrainerContextProviderProps) {
  const [textToSpeech, setTextToSpeech] = useState<TextToSpeech>({
    active: false,
    volume: 0.2,
  })
  const [dateFadeOut, setDateFadeOut] = useState<DateFadeOut>({
    active: false,
    duration: 0.2,
  })

  function handleToggleTextToSpeech() {
    setTextToSpeech((state) => ({
      ...state,
      active: !state.active
    }))
  }

  function handleChangeTextToSpeechValue([value]: number[]) {
    setTextToSpeech((state) => ({
      ...state,
      value,
    }))
  }

  function handleToggleDateFadeOut() {
    setDateFadeOut((state) => ({
      ...state,
      active: !state.active
    }))
  }

  function handleChangeDateFadeOutValue([value]: number[]) {
    setDateFadeOut((state) => ({
      ...state,
      value,
    }))
  }

  return (
    <TrainerContext.Provider
      value={{
        textToSpeech,
        dateFadeOut,
        handleToggleTextToSpeech,
        handleChangeTextToSpeechValue,
        handleToggleDateFadeOut,
        handleChangeDateFadeOutValue,
      }}
    >
      {children}
    </TrainerContext.Provider>
  )
}
