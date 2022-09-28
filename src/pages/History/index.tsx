import { HistoryContainer, HistoryList, Status } from './styles'
import { formatDistanceToNow, differenceInMilliseconds } from 'date-fns'
import { formatDate, weekdaysInfo } from '../../utils/DateGenerator'
import { useCycles } from '../../hooks/useCycles'
import { millisecondsToSeconds } from '../../utils/millisecondsToSeconds'

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
              <th>Weekday</th>
              <th>Your guess</th>
              <th>Started at</th>
              <th>Duration</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {
              cycles.map((cycle) => {
                let cycleDuration
                const userGuessInt = cycle.userGuess ? parseInt(cycle.userGuess) : 0
                const weekday = weekdaysInfo[cycle.weekday.day]
                const userGuess = weekdaysInfo[userGuessInt]
                const userGuessedCorrectly = weekday === userGuess

                if(cycle.finishDate) {
                  const [seconds, milliseconds] = millisecondsToSeconds(differenceInMilliseconds(new Date(cycle.finishDate), new Date(cycle.startDate)))
                  cycleDuration = `${seconds}.${milliseconds}s`
                } else {
                  const [seconds, milliseconds] = millisecondsToSeconds(differenceInMilliseconds(new Date(), cycle.startDate))
                  cycleDuration = `${seconds}.${milliseconds}s`
                }

                return (
                  <tr key={cycle.id}>
                    <td>{formatDate(cycle.randomDate)}</td>
                    <td>{weekday}</td>
                    <td>{userGuess}</td>
                    <td>{formatDistanceToNow(new Date(cycle.startDate), {
                        addSuffix: true,
                      })}
                    </td>
                    <td>{cycleDuration}</td>
                    <td>{userGuessedCorrectly ? "Correct" : "Incorrect"}</td>
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

