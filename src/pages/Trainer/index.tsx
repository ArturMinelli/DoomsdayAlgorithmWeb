import { TrainerContainer, Timer, Separator, WeekdayButton, ButtonsContainer, RandomDate } from './styles'
import { useEffect, useState } from 'react'
import { DateGenerator } from '../../utils/DateGenerator'
import { setFocusWihtKeyboard, clearFocus } from '../../utils/handleKeyboardFocus'
import { v4 as uuid } from 'uuid'
import { differenceInMilliseconds } from 'date-fns'

interface Cycle {
  id: string;
  startDate: Date;
  finishDate?: Date;
}

export function Trainer() {
  const dateGenerator = new DateGenerator()
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [passedMilliseconds, setPassedMilliseconds] = useState<number>(0)
  const [randomDate, setRandomDate] = useState(dateGenerator.generateDate(1700, 2100))
  const weekday = dateGenerator.getWeekday(randomDate)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  useEffect(() => {
    let interval: number

    if(activeCycle) {
      interval = setInterval(() => {
        const currentDifferenceInMilliseconds = differenceInMilliseconds(new Date(), activeCycle.startDate)
        setPassedMilliseconds(currentDifferenceInMilliseconds)
      }, 10)
    }

    return () => {
      clearInterval(interval)
    }

  }, [passedMilliseconds, setPassedMilliseconds, activeCycle])

  const seconds = Math.floor(passedMilliseconds / 1000)
  const milliseconds = passedMilliseconds % 1000
  const paddedSeconds = seconds.toString().padStart(2, '0')
  const paddedMilliseconds = milliseconds.toString().padStart(3, '0')

  function handleUserGuess(data: string) {
    if(data === weekday.toString()) {
      console.log('yeyyy')
    }

    setRandomDate(dateGenerator.generateDate(1700, 2100));
    createNewCycle()
    clearFocus()
  }

  function createNewCycle() {
    const newCycle = {
      id: uuid(),
      startDate: new Date(),
    }

    setCycles((state) => {
      return [...state, newCycle]
    })
    setActiveCycleId(newCycle.id)
    setPassedMilliseconds(0)
  }

  document.addEventListener('keydown', (event) => {
    setFocusWihtKeyboard(event)
  })

  return (
    <TrainerContainer>
      <Timer>
        <span>{paddedSeconds}</span>
        <Separator>:</Separator>
        <span>{paddedMilliseconds}</span>
      </Timer>

      <RandomDate>
        {`${randomDate.day} ${randomDate.month} ${randomDate.year} ${weekday}`}
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
