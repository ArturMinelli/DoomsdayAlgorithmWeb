import { createContext, ReactNode, useState } from "react"
import { DateGenerator, RandomDate } from "../utils/DateGenerator";
import { v4 as uuid } from 'uuid'

interface CyclesContextType {
  cycles: Cycle[];
  activeCycleId: string | null;
  activeCycle: Cycle | undefined;
  passedMilliseconds: number;
  isModalOpen: boolean;
  randomDate: RandomDate;
  weekday: number;
  userGuessedCorrectly: boolean | undefined;
  createNewCycle: () => void;
  handleUserGuess: (guess: string) => void;
  handleCloseModal: () => void;
  updateMilliseconds: (milliseconds: number) => void;
}

interface Cycle {
  id: string;
  startDate: Date;
  finishDate?: Date;
}

interface CyclesContextProviderProps {
  children: ReactNode;
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {
  const dateGenerator = new DateGenerator()
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [randomDate, setRandomDate] = useState(dateGenerator.generateDate(1700, 2100))
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [passedMilliseconds, setPassedMilliseconds] = useState<number>(0)
  const [userGuessedCorrectly, setUserGuessedCorrectly] = useState<boolean>(false)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  const weekday = dateGenerator.getWeekday(randomDate)

  async function createNewCycle() {
    const newCycle = {
      id: uuid(),
      startDate: new Date(),
    }

    setCycles((state) => {
      return [...state, newCycle]
    })

    setRandomDate(dateGenerator.generateDate(1700, 2100))
    setActiveCycleId(newCycle.id)
    setPassedMilliseconds(0)
  }

  function updateMilliseconds(milliseconds: number) {
    setPassedMilliseconds(milliseconds)
  }

  function handleUserGuess(guess: string) {
    setUserGuessedCorrectly((weekday.toString() === guess) ? true : false)
    setActiveCycleId(null)
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
