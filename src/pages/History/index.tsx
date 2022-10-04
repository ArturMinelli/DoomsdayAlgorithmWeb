import { HistoryContainer, Status, TitleContainer } from './styles'
import { useCycles } from '../../hooks/useCycles'
import { Trash } from 'phosphor-react'
import { HistoryTable } from './components/HistoryTable'
import * as Dialog from '@radix-ui/react-dialog'
import { ExplanationModal } from './components/ExplanationModal'
import { useState } from 'react'
import { Cycle } from '../../contexts/CyclesContext'

export function History() {
  const { cycles, emptyCycles } = useCycles()
  const [selectedCycleId, setSelectedCycleId] = useState<string | null>(null)
  const selectedCycle = cycles.find((cycle) => selectedCycleId === cycle.id)

  function handleCycleIdSelected(cycleId: string) {
    setSelectedCycleId(cycleId)
  }

  function handleEmptyCycles() {
    emptyCycles()
  }

  return (
    <HistoryContainer>
      <TitleContainer>
        <h1>History</h1>
        <button>
          <Trash onClick={handleEmptyCycles} size={20} />
        </button>
      </TitleContainer>
      <Dialog.Root>
        <HistoryTable onCycleIdSelected={handleCycleIdSelected}/>
        <ExplanationModal selectedCycle={selectedCycle as Cycle} />
      </Dialog.Root>
    </HistoryContainer>
  )
}

