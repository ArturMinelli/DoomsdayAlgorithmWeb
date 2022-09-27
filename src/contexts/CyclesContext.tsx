import { createContext, ReactNode, useReducer, useState } from "react"
import { DateGenerator, RandomDate, WeekdayAnswer } from "../utils/DateGenerator";
import { cyclesReducer, CyclesState } from "../reducers/cycles/reducer";
import { createNewCycleAction, finishCurrentCycleAction } from "../reducers/actions";
import { v4 as uuid } from 'uuid'

interface CyclesContextType {
  cycles: Cycle[];
  activeCycleId: string | null;
  activeCycle: Cycle | undefined;
  passedMilliseconds: number;
  isModalOpen: boolean;
  randomDate: RandomDate;
  weekday: WeekdayAnswer;
  userGuessedCorrectly: boolean | undefined;
  createNewCycle: () => void;
  handleUserGuess: (guess: string) => void;
  handleCloseModal: () => void;
  updateMilliseconds: (milliseconds: number) => void;
}

export interface Cycle {
  id: string;
  randomDate: RandomDate;
  weekday: WeekdayAnswer;
  startDate: Date;
  finishDate?: Date;
}

interface CyclesContextProviderProps {
  children: ReactNode;
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {
  const dateGenerator = new DateGenerator()

  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  })

  const { cycles, activeCycleId } = cyclesState

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [passedMilliseconds, setPassedMilliseconds] = useState<number>(0)
  const [userGuessedCorrectly, setUserGuessedCorrectly] = useState<boolean>(false)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  const randomDate = (activeCycle && activeCycle.randomDate)
  const weekday = (activeCycle && activeCycle.weekday)

  function createNewCycle() {
    const randomDate = dateGenerator.generateDate(1700, 2100)
    const weekday = dateGenerator.getWeekday(randomDate)

    const newCycle = {
      id: uuid(),
      randomDate: randomDate,
      weekday: weekday,
      startDate: new Date(),
    }
    setPassedMilliseconds(0)
    dispatch(createNewCycleAction(newCycle))
  }

  function finishCurrentCycle() {
    dispatch(finishCurrentCycleAction())
  }

  function updateMilliseconds(milliseconds: number) {
    setPassedMilliseconds(milliseconds)
  }

  function handleUserGuess(guess: string) {
    setUserGuessedCorrectly((weekday.day.toString() === guess) ? true : false)

    finishCurrentCycle()
    setPassedMilliseconds(0)

    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setUserGuessedCorrectly(false)
    setIsModalOpen(false)
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycleId,
        activeCycle,
        passedMilliseconds,
        isModalOpen,
        randomDate,
        weekday,
        userGuessedCorrectly,
        createNewCycle,
        handleUserGuess,
        handleCloseModal,
        updateMilliseconds,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
