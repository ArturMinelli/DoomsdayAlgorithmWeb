import { TrainerContainer } from './styles'
import { handleKeyboardEvents } from '../../utils/handleKeyboardEvents'
import * as Dialog from '@radix-ui/react-dialog'
import { UserGuessFeedbackModal } from './components/UserGuessFeedbackModal'
import { Timer } from './components/Timer'
import { WeekdaysButtons } from './components/WeekdaysButtons'
import { StartButton } from './components/StartButton'
import { RandomDate } from './components/RandomDate'
import { useCycles } from '../../hooks/useCycles'

export function Trainer() {
  const { activeCycle, randomDate, weekday, isModalOpen, handleCloseModal } = useCycles()

  handleKeyboardEvents()
  return (
    <TrainerContainer>

      { activeCycle ? <Timer /> : <StartButton /> }

      <RandomDate
        text={activeCycle ? `${randomDate.day} ${randomDate.month} ${randomDate.year} ${weekday.day}` : "Press the spacebar to start"}
        size = {activeCycle ? '1.75rem' : '1.25rem'}
      />

      <WeekdaysButtons />
      <Dialog.Root open={isModalOpen} onOpenChange={handleCloseModal}>
        <UserGuessFeedbackModal  />
      </Dialog.Root>

    </TrainerContainer>
  )
}
