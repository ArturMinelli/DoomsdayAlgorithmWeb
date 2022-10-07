import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { ModalWave } from '../../../../components/ModalWave';
import { Cycle } from '../../../../contexts/CyclesContext';
import { formatDate, formatMonth, formatMonthAndDay } from '../../../../utils/DateGenerator';
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
    const { helperVariables, steps } = weekday

    return (
      <ExplanationDialogOverlay>
        <ExplanationDialogContent>
          <ExplanationHeader>
            <h1>Explanation</h1>
            <Dialog.Close>
              <X size={16} weight="bold" />
            </Dialog.Close>
          </ExplanationHeader>
          <ModalWave />
          <Explanation>
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