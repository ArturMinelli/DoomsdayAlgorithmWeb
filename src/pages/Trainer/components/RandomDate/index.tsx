import { useTrainer } from "../../../../hooks/useTrainer";
import { RandomDateContainer } from "./styles";


interface RandomDateProps {
  text: string;
}

export function RandomDate({ text }: RandomDateProps) {
  const { dateFadeOut } = useTrainer()

  return (
    <RandomDateContainer
      fadeOut={dateFadeOut}
    >
      {text}
    </RandomDateContainer>
  )
}