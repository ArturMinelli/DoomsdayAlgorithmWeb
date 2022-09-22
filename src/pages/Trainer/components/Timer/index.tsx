import { differenceInMilliseconds } from "date-fns";
import { useContext, useEffect } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { Separator, TimerContainer } from "./styles";

export function Timer() {
  const { activeCycle, passedMilliseconds, updateMilliseconds } = useContext(CyclesContext)

  useEffect(() => {
    let interval: number

    if(activeCycle) {
      interval = setInterval(() => {
        const currentDifferenceInMilliseconds = differenceInMilliseconds(new Date(), activeCycle.startDate)
        updateMilliseconds(currentDifferenceInMilliseconds)
      }, 10)
    }

    return () => {
      clearInterval(interval)
    }

  }, [activeCycle, updateMilliseconds])

  const seconds = Math.floor(passedMilliseconds / 1000)
  const milliseconds = passedMilliseconds % 1000
  const paddedSeconds = seconds.toString().padStart(2, '0')
  const paddedMilliseconds = milliseconds.toString().padStart(3, '0')

  return(
    <TimerContainer>
      <span>{paddedSeconds}</span>
      <Separator>:</Separator>
      <span>{paddedMilliseconds}</span>
    </TimerContainer>
  )
}