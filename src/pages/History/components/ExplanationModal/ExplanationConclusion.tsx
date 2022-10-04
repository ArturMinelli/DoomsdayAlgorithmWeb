import { Cycle } from "../../../../contexts/CyclesContext";
import { formatDate, formatDay } from "../../../../utils/DateGenerator";

interface ExplanationConclusionProps {
  selectedCycle: Cycle;
}

export function ExplanationConclusion({ selectedCycle }: ExplanationConclusionProps) {
  const { weekday, randomDate } = selectedCycle
  const total = Object.values(weekday.steps).reduce((accum, current) => {
    return accum + current
  })
  const totalIsMoreThanSix = total > 6

  return (
    <div>
      {
        totalIsMoreThanSix ?
        <div>
          <p>
            After adding all of those numbers we are left with {total},
            and since {total} is more than six we divide it by seven until we get a remainder that is between 0 and 6.
          </p>
          <p>
            This gives us a result of {weekday.day}, so we can conclude that {formatDate(randomDate)} was a {formatDay(randomDate)}.
          </p>
        </div>
        :
        <div>
          <p>
            After adding all of those numbers we are left with {total},
            and since {total} is less than seven we can conclude that {formatDate(randomDate)} was a {formatDay(randomDate)}.
          </p>
        </div>
      }
    </div>
  )
}