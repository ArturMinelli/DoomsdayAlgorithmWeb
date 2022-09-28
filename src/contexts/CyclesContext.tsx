import { createContext, ReactNode, useEffect, useReducer, useState } from "react"
import { getRandomDate , getWeekday, WeekdayAnswer } from "../utils/DateGenerator";
import { cyclesReducer } from "../reducers/cycles/reducer";
import { createNewCycleAction, finishCurrentCycleAction } from "../reducers/actions";
import { v4 as uuid } from 'uuid'

interface CyclesContextType {
  cycles: Cycle[];
  activeCycleId: string | null;
  activeCycle: Cycle | undefined;
  passedMilliseconds: number;
  isModalOpen: boolean;
  randomDate: Date;
  weekday: WeekdayAnswer;
  userGuessedCorrectly: boolean | undefined;
  createNewCycle: () => void;
  handleUserGuess: (guess: string) => void;
  handleCloseModal: () => void;
  updateMilliseconds: (milliseconds: number) => void;
}

export interface Cycle {
  id: string;
  randomDate: Date;
  weekday: WeekdayAnswer;
  userGuess?: string;
  startDate: Date;
  duration?: number;
}

interface CyclesContextProviderProps {
  children: ReactNode;
}

export const CyclesContext = createContext({} as CyclesContextType)

const CYCLES_STORAGE_KEY = "DoomsdayAlgorithm:cyclesState"

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  }, (initialState) => {
    const storedCycles = localStorage.getItem(CYCLES_STORAGE_KEY)

    if(storedCycles) {
      return JSON.parse(storedCycles)
    } else return initialState
  })

  const { cycles, activeCycleId } = cyclesState

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [passedMilliseconds, setPassedMilliseconds] = useState<number>(0)
  const [userGuessedCorrectly, setUserGuessedCorrectly] = useState<boolean>(false)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  const randomDate = (activeCycle && activeCycle.randomDate)
  const weekday = (activeCycle && activeCycle.weekday)

  function createNewCycle() {
    const randomDate = getRandomDate()
    const weekday = getWeekday(randomDate)

    const newCycle = {
      id: uuid(),
      randomDate: randomDate,
      weekday: weekday,
      startDate: new Date(),
    }
    setPassedMilliseconds(0)
    dispatch(createNewCycleAction(newCycle))
  }

  function finishCurrentCycle(userGuess: string) {
    dispatch(finishCurrentCycleAction(userGuess))
  }

  function updateMilliseconds(milliseconds: number) {
    setPassedMilliseconds(milliseconds)
  }

  function handleUserGuess(guess: string) {
    setUserGuessedCorrectly((weekday.day == guess) ? true : false)

    finishCurrentCycle(guess)
    setPassedMilliseconds(0)

    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setUserGuessedCorrectly(false)
    setIsModalOpen(false)
  }

  useEffect(() => {
    localStorage.setItem(CYCLES_STORAGE_KEY, JSON.stringify(cyclesState))
  }, [cyclesState])

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
