import { ModalContentProps } from "../../";
import { RightAnswerModalContainer, Time, Title } from "./styles";

export function WrongAnswerModal({ weekday }: ModalContentProps) {
  return (
    <RightAnswerModalContainer>
      <Title>Wrong answer :/</Title>
      <Time>Your time was 10:452</Time>
      <h2>Explanation</h2>
    </RightAnswerModalContainer>
  )
}