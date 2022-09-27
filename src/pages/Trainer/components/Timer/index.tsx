import { differenceInMilliseconds } from "date-fns";
import { useEffect } from "react";
import { useCycles } from "../../../../hooks/useCycles";
import { millisecondsToSeconds } from "../../../../utils/millisecondsToSeconds";
import { Separator, TimerContainer } from "./styles";

export function Timer() {
  const { activeCycle, passedMilliseconds, updateMilliseconds } = useCycles()

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

  const [seconds, milliseconds] = millisecondsToSeconds(passedMilliseconds)

  return(
    <TimerContainer>
      <span>{seconds}</span>
      <Separator>:</Separator>
      <span>{milliseconds}</span>
    </TimerContainer>
  )
}