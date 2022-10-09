import { PressSpaceMessage, ToastContainerStyled, TrainerContainer, TrainerFooter } from './styles'
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
import { SettingsModal } from './components/SettingsModal'
import { TrainerContextProvider } from '../../contexts/TrainerContext'

export function Trainer() {
  const { activeCycle, randomDate, isModalOpen, handleCloseModal } = useCycles()

  handleKeyboardEvents()
  return (
    <TrainerContextProvider>
      <TrainerContainer>

        { activeCycle ? <Timer /> : <StartButton /> }

        { activeCycle ?
        <RandomDate
          key={activeCycle?.id}
          text={`${formatDate(randomDate)}`}
        /> :
          <PressSpaceMessage>Press the spacebar to start</PressSpaceMessage>
        }

        <WeekdaysButtons />
        <Dialog.Root>
          <TrainerFooter>
            <Dialog.Trigger disabled={activeCycle ? true : false}>
              <Gear size={24}/>
            </Dialog.Trigger>
          </TrainerFooter>

          <SettingsModal />
        </Dialog.Root>
        <ToastContainerStyled />
      </TrainerContainer>
    </TrainerContextProvider>
  )
}
