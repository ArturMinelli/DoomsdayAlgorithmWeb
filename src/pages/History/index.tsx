import { HistoryContainer, Status, TitleContainer } from './styles'
import { useCycles } from '../../hooks/useCycles'
import { Trash } from 'phosphor-react'
import { HistoryTable } from './components/HistoryTable'

export function History() {
  const { emptyCycles } = useCycles()

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
      <HistoryTable />
    </HistoryContainer>
  )
}

