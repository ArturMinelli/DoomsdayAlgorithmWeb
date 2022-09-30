import { ModalContentProps } from "../../";
import { ExplanationContainer, RightAnswerModalContainer, Time, Title } from "./styles";

export function WrongAnswerModal({ activeCycle }: ModalContentProps) {
  return (
    <RightAnswerModalContainer>
      <Title>Wrong answer :/</Title>
      <Time>Your time was {activeCycle?.duration && activeCycle.duration / 1000}s</Time>
      <ExplanationContainer>
        <h2>Explanation</h2>
        <p>I am gonna reap what i saw got a feeling that i am goung under</p>
        <p>You watch me bleed until i cant breathe ill be needing stitches</p>
      </ExplanationContainer>
    </RightAnswerModalContainer>
  )
}