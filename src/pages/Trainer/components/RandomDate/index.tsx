import { RandomDateContainer } from "./styles";


interface RandomDateProps {
  text: string;
  size: string;
}

export function RandomDate({ text, size }: RandomDateProps) {
  return (
    <RandomDateContainer size={size}>
      {text}
    </RandomDateContainer>
  )
}