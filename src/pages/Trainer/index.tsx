import { ToastContainerStyled, TrainerContainer, TrainerFooter } from './styles'
import { handleKeyboardEvents } from '../../utils/handleKeyboardEvents'
import { Timer } from './components/Timer'
import { WeekdaysButtons } from './components/WeekdaysButtons'
import { StartButton } from './components/StartButton'
import { RandomDate } from './components/RandomDate'
import { useCycles } from '../../hooks/useCycles'
import { formatDate } from '../../utils/DateGenerator'
import 'react-toastify/dist/ReactToastify.css';
import { Gear } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { Ssss, SettingsModal } from './components/SettingsModal'

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
      <Dialog.Root>
        <TrainerFooter>
          <Dialog.Trigger>
            <Gear size={24}/>
          </Dialog.Trigger>
        </TrainerFooter>

        <SettingsModal />
      </Dialog.Root>
      <ToastContainerStyled />
    </TrainerContainer>
  )
}
