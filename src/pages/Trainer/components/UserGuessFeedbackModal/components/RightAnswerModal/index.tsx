import { ModalContentProps } from "../..";
import { RightAnswerModalContainer, Time, Title } from "./styles";

export function RightAnswerModal({ activeCycle }: ModalContentProps) {
  return (
    <RightAnswerModalContainer>
      <Title>You got it!</Title>
      {activeCycle && (
        <Time>Your time was {activeCycle.duration && activeCycle.duration / 1000}s</Time>
      )}
    </RightAnswerModalContainer>
  )
}