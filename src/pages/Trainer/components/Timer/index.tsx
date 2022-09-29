import { differenceInMilliseconds } from "date-fns";
import { useEffect } from "react";
import { useCycles } from "../../../../hooks/useCycles";
import { Separator, TimerContainer } from "./styles";

export function Timer() {
  const { activeCycle, passedMilliseconds, updateMilliseconds } = useCycles()

  useEffect(() => {
    let interval: number

    if(activeCycle) {
      interval = setInterval(() => {
        const currentDifferenceInMilliseconds = differenceInMilliseconds(new Date(), new Date(activeCycle.startDate))
        updateMilliseconds(currentDifferenceInMilliseconds)
      }, 10)
    }

    return () => {
      clearInterval(interval)
    }

  }, [activeCycle, updateMilliseconds])

  function formatTimerSeconds(passedMilliseconds: number): string[] {
    const seconds = Math.floor(passedMilliseconds / 1000).toString()
    const milliseconds = (passedMilliseconds % 1000).toString()
    const paddedSeconds = seconds.padStart(2, '0')
    const paddedMilliseconds = milliseconds.padStart(3, '0')

    return [paddedSeconds, paddedMilliseconds]
  }

  const [seconds, milliseconds] = formatTimerSeconds(passedMilliseconds)

  return(
    <TimerContainer>
      <span>{seconds}</span>
      <Separator>:</Separator>
      <span>{milliseconds}</span>
    </TimerContainer>
  )
}