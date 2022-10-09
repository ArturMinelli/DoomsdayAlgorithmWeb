import { useEffect } from "react";
import { useTrainer } from "../../../../hooks/useTrainer";
import { emitTextToSpeech } from "../../../../utils/emitTextToSpeech";
import { RandomDateContainer } from "./styles";

interface RandomDateProps {
  text: string;
}

export function RandomDate({ text }: RandomDateProps) {
  const {
    settings,
    toggleTextToSpeech,
    changeTextToSpeechVolume,
    toggleDateFadeOut,
    changeDateFadeOutDuration
   } = useTrainer()
   const { textToSpeech, dateFadeOut } = settings

  useEffect(() => {
    if(textToSpeech.active) {
      emitTextToSpeech(text, 'en', textToSpeech.volume)
    }
  }, [settings])

  return (
    <RandomDateContainer
      fadeOut={dateFadeOut}
    >
      {text}
    </RandomDateContainer>
  )
}