import { formatDistanceToNow } from "date-fns";
import { useCycles } from "../../../../hooks/useCycles";
import { formatDate, weekdaysInfo } from "../../../../utils/DateGenerator";
import { HistoryContentContainer, ScrollAreaRoot, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from "./styles";

export function HistoryTable() {
  const { cycles, emptyCycles } = useCycles()

  function handleEmptyCycles() {
    emptyCycles()
  }

  return (
    <ScrollAreaRoot>
      <ScrollAreaViewport>
      <HistoryContentContainer>
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
                if(cycle.duration && cycle.userGuess) {
                  const userGuessInt = parseInt(cycle.userGuess)
                  const userGuess = weekdaysInfo[userGuessInt]
                  const weekday = weekdaysInfo[cycle.weekday.day]
                  const userGuessedCorrectly = weekday === userGuess

                  return (
                    <tr key={cycle.id}>
                      <td>{formatDate(cycle.randomDate)}</td>
                      <td>{weekday}</td>
                      <td>{userGuess}</td>
                      <td>{formatDistanceToNow(new Date(cycle.startDate), {
                          addSuffix: true,
                        })}
                      </td>
                      <td>{cycle.duration / 1000}s</td>
                      <td>{userGuessedCorrectly ? "Correct" : "Incorrect"}</td>
                    </tr>
                  )
                }
              })
            }
          </tbody>
        </table>
      </HistoryContentContainer>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    </ScrollAreaRoot>
  )
}