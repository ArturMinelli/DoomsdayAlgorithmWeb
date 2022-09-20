import { TrainerContainer, Timer, Separator, WeekdayButton, ButtonsContainer, RandomDate } from './styles'
import { useReducer, useState } from 'react'
import { DateGenerator } from '../../utils/DateGenerator'
import { setFocusWihtKeyboard, clearFocus } from '../../utils/handleKeyboardFocus'

export function Trainer() {
  const dateGenerator = new DateGenerator()
  const [randomDate, setRandomDate] = useState(dateGenerator.generateDate(1700, 2100))
  const weekday = dateGenerator.getWeekday(randomDate)
  console.log(randomDate, weekday)

  function handleUserGuess(data: string) {
    if(data === weekday.toString()) {
      console.log('yeyyy')
    }

    setRandomDate(dateGenerator.generateDate(1700, 2100));
    clearFocus()
  }

  document.addEventListener('keydown', (event) => {
    setFocusWihtKeyboard(event)
  })

  return (
    <TrainerContainer>
      <Timer>
        <span>00</span>
        <Separator>:</Separator>
        <span>00</span>
      </Timer>

      <RandomDate>
        {`${randomDate.day} ${randomDate.month} ${randomDate.year}`}
      </RandomDate>

      <ButtonsContainer
        type='single'
        onValueChange={handleUserGuess}
      >
        <div>
          <WeekdayButton id='0' value="0">
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
    </TrainerContainer>
  )
}
