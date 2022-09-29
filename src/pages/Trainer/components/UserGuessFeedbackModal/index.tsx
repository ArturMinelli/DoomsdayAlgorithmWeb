import * as Dialog from '@radix-ui/react-dialog'
import { Cycle } from '../../../../contexts/CyclesContext'
import { useCycles } from '../../../../hooks/useCycles'
import { WeekdayAnswer } from '../../../../utils/DateGenerator'
import { RightAnswerModal } from './components/RightAnswerModal'
import { WrongAnswerModal } from './components/WrongAnswerModal'
import { FeedbackDialogContent, FeedbackDialogOverlay } from './styles'

export interface ModalContentProps {
  activeCycle: Cycle | undefined;
}

export function UserGuessFeedbackModal() {
  const { userGuessedCorrectly, activeCycle } = useCycles()

  return (
    <Dialog.Portal>
      <FeedbackDialogOverlay>
        <FeedbackDialogContent>
          { userGuessedCorrectly ?
          <RightAnswerModal activeCycle={activeCycle} />
          :
          <WrongAnswerModal activeCycle={activeCycle} />
          }
        </FeedbackDialogContent>
      </FeedbackDialogOverlay>
    </Dialog.Portal>
  )
}