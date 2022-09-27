import { HistoryContainer, HistoryList, Status } from './styles'
import { formatDistanceToNow, differenceInMilliseconds } from 'date-fns'
import { DateGenerator } from '../../utils/DateGenerator'
import { useCycles } from '../../hooks/useCycles'

export function History() {
  const { cycles } = useCycles()

  return (
    <HistoryContainer>
      <h1>My history</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Answer</th>
              <th>Started at</th>
              <th>Duration</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {
              cycles.map((cycle) => {
                const dateGenerator = new DateGenerator()
                const formattedDate = dateGenerator.formatDate(cycle.randomDate)
                const duration = differenceInMilliseconds()

                return (
                  <tr key={cycle.id}>
                    <td>{formattedDate}</td>
                    <td>{cycle.weekday.day}</td>
                    <td>{formatDistanceToNow(new Date(cycle.startDate), {
                        addSuffix: true,
                      })}
                    </td>
                    <td>{cycle.finishDate?.toISOString()}</td>
                    <td>{cycle.id}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}

