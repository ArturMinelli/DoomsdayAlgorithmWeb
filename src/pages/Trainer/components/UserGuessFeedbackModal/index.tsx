//import {  } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { useCycles } from '../../../../hooks/useCycles'
import { WeekdayAnswer } from '../../../../utils/DateGenerator'
import { RightAnswerModal } from './components/RightAnswerModal'
import { WrongAnswerModal } from './components/WrongAnswerModal'
import { FeedbackDialogContent, FeedbackDialogOverlay } from './styles'

export interface ModalContentProps {
  weekday: WeekdayAnswer;
}

export function UserGuessFeedbackModal() {
  const { userGuessedCorrectly, weekday } = useCycles()

  return (
    <Dialog.Portal>
      <FeedbackDialogOverlay>
        <FeedbackDialogContent>
          { userGuessedCorrectly ?
          <RightAnswerModal weekday={weekday} />
          :
          <WrongAnswerModal weekday={weekday} />
          }
        </FeedbackDialogContent>
      </FeedbackDialogOverlay>
    </Dialog.Portal>
  )
}