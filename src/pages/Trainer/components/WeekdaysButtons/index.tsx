import { useContext } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { ButtonsContainer, WeekdayButton } from "./styles";

export function WeekdaysButtons() {
  const { handleUserGuess } =  useContext(CyclesContext)

  return (
    <ButtonsContainer
    type='single'
    onValueChange={handleUserGuess}
    >
      <div>
          <WeekdayButton id="0" value="0">
            <span>0</span>
            Sunday
          </WeekdayButton>
          <WeekdayButton id="1" value="1">
            <span>1</span>
            Monday
          </WeekdayButton>
      </div>
      <div>
          <WeekdayButton id="2" value="2">
            <span>2</span>
            Tuesday
          </WeekdayButton>
          <WeekdayButton id="3" value="3">
            <span>3</span>
            Wednesday
          </WeekdayButton>
      </div>
      <div>
          <WeekdayButton id="4" value="4">
            <span>4</span>
            Thursday
          </WeekdayButton>
          <WeekdayButton id="5" value="5">
            <span>5</span>
            Friday
          </WeekdayButton>
      </div>
      <div>
          <WeekdayButton id="6" value="6">
            <span>6</span>
            Saturday
          </WeekdayButton>
      </div>
    </ButtonsContainer>
  )
}