import { ModalContentProps } from "../..";
import { RightAnswerModalContainer, Time, Title } from "./styles";

export function RightAnswerModal({ weekday }: ModalContentProps) {
  return (
    <RightAnswerModalContainer>
      <Title>You got it!</Title>
      <Time>Your time was 10:452</Time>
      <h2>Explanation</h2>
    </RightAnswerModalContainer>
  )
}