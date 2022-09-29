import { ModalContentProps } from "../../";
import { RightAnswerModalContainer, Time, Title } from "./styles";

export function WrongAnswerModal({ activeCycle }: ModalContentProps) {
  return (
    <RightAnswerModalContainer>
      <Title>Wrong answer :/</Title>
      <Time>Your time was {activeCycle?.duration && activeCycle.duration / 1000}s</Time>
      <h2>Hexplanation</h2>

      <button>button</button>
    </RightAnswerModalContainer>
  )
}