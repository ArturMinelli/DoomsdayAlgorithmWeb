import { Cycle } from '../../../../contexts/CyclesContext';
import { centuriesInfo, formatDate, formatMonth, formatMonthAndDay, monthsInfo } from '../../../../utils/DateGenerator';
import { ExplanationConclusion } from './ExplanationConclusion'
import { Explanation, ExplanationDialogContent, ExplanationDialogOverlay, ExplanationHeader } from './styles'

interface ExplanationModalProps {
  selectedCycle: Cycle | null;
}

export function ExplanationModal({selectedCycle}: ExplanationModalProps) {
  if(!selectedCycle) {
    return <></>
  }
  else {
    const { weekday, randomDate } = selectedCycle
    const { day, helperVariables, steps } = weekday

    return (
      <ExplanationDialogOverlay>
        <ExplanationDialogContent>
          <ExplanationHeader>
            <h1>Explanation</h1>
          </ExplanationHeader>
          <Explanation>
            <div className="wave">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
              </svg>
            </div>

            <h3>{formatDate(randomDate)}</h3>

            <p>
              The doomsday of {formatMonth(randomDate)} is {helperVariables.monthDoomsday}, which is {steps.dayToMonthDoomsdayOffset} days away from {formatMonthAndDay(randomDate)}.
            </p>
            <p>
              The century code of {helperVariables.century} is {steps.centuryCode} and {helperVariables.decade} divided by twelve equals {steps.divisionDecadeByTwelve}.
              The remainder of that operation is {steps.remainderDecadeByTwelve}, in which four can fit {steps.divisionRemainderByFour} times.
            </p>
            <ExplanationConclusion selectedCycle={selectedCycle}/>
          </Explanation>
        </ExplanationDialogContent>
      </ExplanationDialogOverlay>
    )
  }
}