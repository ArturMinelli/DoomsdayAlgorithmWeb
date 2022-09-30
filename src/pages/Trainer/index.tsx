import { ToastContainerStyled, TrainerContainer } from './styles'
import { handleKeyboardEvents } from '../../utils/handleKeyboardEvents'
import { Timer } from './components/Timer'
import { WeekdaysButtons } from './components/WeekdaysButtons'
import { StartButton } from './components/StartButton'
import { RandomDate } from './components/RandomDate'
import { useCycles } from '../../hooks/useCycles'
import { formatDate } from '../../utils/DateGenerator'
import 'react-toastify/dist/ReactToastify.css';

export function Trainer() {
  const { activeCycle, randomDate, isModalOpen, handleCloseModal } = useCycles()

  handleKeyboardEvents()
  return (
    <TrainerContainer>

      { activeCycle ? <Timer /> : <StartButton /> }

      <RandomDate
        text={activeCycle ? `${formatDate(randomDate)}` : "Press the spacebar to start"}
        size = {activeCycle ? '1.75rem' : '1.25rem'}
      />

      <WeekdaysButtons />
      <ToastContainerStyled />
    </TrainerContainer>
  )
}
