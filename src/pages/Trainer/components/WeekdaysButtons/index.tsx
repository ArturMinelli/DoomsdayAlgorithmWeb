import { ChangeEvent, useContext, useState } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { ButtonsContainer, WeekdayButton } from "./styles";

export function WeekdaysButtons() {
  const { handleUserGuess, activeCycle } =  useContext(CyclesContext)

  function handle(event: ChangeEvent<HTMLInputElement>) {
    handleUserGuess(event.target.value)
    event.target.checked = false
  }

  return (
    <ButtonsContainer>
      <WeekdayButton
        id="0"
        onClick={() => handleUserGuess('0')}
        disabled={!activeCycle}
      >
        <span>0</span>
        Sunday
      </WeekdayButton>

      <WeekdayButton
        id="1"
        onClick={() => handleUserGuess('1')}
        disabled={!activeCycle}
      >
        <span>1</span>
        Monday
      </WeekdayButton>


      <WeekdayButton
        id="2"
        onClick={() => handleUserGuess('2')}
        disabled={!activeCycle}
      >
        <span>2</span>
        Tuesday
      </WeekdayButton>

      <WeekdayButton
        id="3"
        onClick={() => handleUserGuess('3')}
        disabled={!activeCycle}
      >
        <span>3</span>
        Wednesday
      </WeekdayButton>

      <WeekdayButton
        id="4"
        onClick={() => handleUserGuess('4')}
        disabled={!activeCycle}
      >
        <span>4</span>
        Thursday
      </WeekdayButton>

      <WeekdayButton
        id="5"
        onClick={() => handleUserGuess('5')}
        disabled={!activeCycle}
      >
        <span>5</span>
        Friday
      </WeekdayButton>

      <WeekdayButton
        id="6"
        onClick={() => handleUserGuess('6')}
        disabled={!activeCycle}
      >
        <span>6</span>
        Saturday
      </WeekdayButton>
    </ButtonsContainer>
  )
}