import { ChangeEvent, useContext, useState } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { ButtonsContainer, WeekdayButton } from "./styles";

export function WeekdaysButtons() {
  const { handleUserGuess, activeCycle } =  useContext(CyclesContext)

  function handleValueChange(event: ChangeEvent<HTMLInputElement>) {
    handleUserGuess(event.target.value)
    event.target.checked = false
  }

  return (
    <ButtonsContainer>
      <div>
          <WeekdayButton disabled={!activeCycle} htmlFor="0" >
            <input
              id="0"
              value={0}
              name="weekdaysButtons"
              type="radio"
              onChange={handleValueChange}
              disabled={!activeCycle}
            />
            <span>0</span>
            Sunday
          </WeekdayButton>
          <WeekdayButton disabled={!activeCycle}  htmlFor="1" >
            <input
              id="1"
              value={1}
              name="weekdaysButtons"
              type="radio"
              onChange={handleValueChange}
              disabled={!activeCycle}
            />
            <span>1</span>
            Monday
          </WeekdayButton>
      </div>
      <div>
          <WeekdayButton disabled={!activeCycle}  htmlFor="2" >
            <input
              id="2"
              value={2}
              name="weekdaysButtons"
              type="radio"
              onChange={handleValueChange}
              disabled={!activeCycle}
            />
            <span>2</span>
            Tuesday
          </WeekdayButton>
          <WeekdayButton disabled={!activeCycle}  htmlFor="3" >
            <input
              id="3"
              value={3}
              name="weekdaysButtons"
              type="radio"
              onChange={handleValueChange}
              disabled={!activeCycle}
            />
            <span>3</span>
            Wednesday
          </WeekdayButton>
      </div>
      <div>
          <WeekdayButton disabled={!activeCycle}  htmlFor="4" >
            <input
              id="4"
              value={4}
              name="weekdaysButtons"
              type="radio"
              onChange={handleValueChange}
              disabled={!activeCycle}
            />
            <span>4</span>
            Thursday
          </WeekdayButton>
          <WeekdayButton disabled={!activeCycle}  htmlFor="5" >
            <input
              id="5"
              value={5}
              name="weekdaysButtons"
              type="radio"
              onChange={handleValueChange}
              disabled={!activeCycle}
            />
            <span>5</span>
            Friday
          </WeekdayButton>
      </div>
      <div>
          <WeekdayButton disabled={!activeCycle}  htmlFor="6" >
            <input
              id="6"
              value={6}
              name="weekdaysButtons"
              type="radio"
              onChange={handleValueChange}
              disabled={!activeCycle}
            />
            <span>6</span>
            Saturday
          </WeekdayButton>
      </div>
    </ButtonsContainer>
  )
}