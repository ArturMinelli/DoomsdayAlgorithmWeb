import { formatDistanceToNow } from "date-fns";
import { CaretDown } from "phosphor-react";
import { forwardRef, useRef } from "react";
import { useCycles } from "../../../../hooks/useCycles";
import { formatDate, weekdaysInfo } from "../../../../utils/DateGenerator";
import { DefaultFocus, HistoryContentContainer, OpenModalButton, ScrollAreaRoot, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from "./styles";

interface HistoryTableProps {
  onCycleIdSelected: (cycleId: string) => void;
}

// export function HistoryTable({onCycleIdSelected}: HistoryTableProps) {
//   const { cycles } = useCycles()


//   return (
//     <ScrollAreaRoot>
//       <ScrollAreaViewport>
//       <HistoryContentContainer>
//       <DefaultFocus ref={defaultFocus}>Click me</DefaultFocus>
//         <table>
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Weekday</th>
//               <th>Your guess</th>
//               <th>Started at</th>
//               <th>Duration</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//           {
//               cycles.map((cycle) => {
//                 if(cycle.duration && cycle.userGuess) {
//                   const userGuessInt = parseInt(cycle.userGuess)
//                   const userGuess = weekdaysInfo[userGuessInt]
//                   const weekday = weekdaysInfo[cycle.weekday.day]
//                   const userGuessedCorrectly = weekday === userGuess

//                   return (
//                     <tr key={cycle.id}>
//                       <td>{formatDate(cycle.randomDate)}</td>
//                       <td className="weekday">
//                         {weekday}
//                         <OpenModalButton onClick={() => onCycleIdSelected(cycle.id)}>
//                           <CaretDown weight="fill" />
//                         </OpenModalButton>
//                       </td>
//                       <td>{userGuess}</td>
//                       <td>{formatDistanceToNow(new Date(cycle.startDate), {
//                           addSuffix: true,
//                         })}
//                       </td>
//                       <td>{cycle.duration / 1000}s</td>
//                       <td>{userGuessedCorrectly ? "Correct" : "Incorrect"}</td>
//                     </tr>
//                   )
//                 }
//               })
//             }
//           </tbody>
//         </table>
//       </HistoryContentContainer>
//       </ScrollAreaViewport>
//       <ScrollAreaScrollbar orientation="vertical">
//         <ScrollAreaThumb />
//       </ScrollAreaScrollbar>
//     </ScrollAreaRoot>
//   )
// }

export const HistoryTable = forwardRef<HTMLButtonElement, HistoryTableProps>(({onCycleIdSelected}, ref) => {
  const { cycles } = useCycles()

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
              cycles.map((cycle, index) => {
                if(cycle.duration && cycle.userGuess) {
                  const userGuessInt = parseInt(cycle.userGuess)
                  const userGuess = weekdaysInfo[userGuessInt]
                  const weekday = weekdaysInfo[cycle.weekday.day]
                  const userGuessedCorrectly = weekday === userGuess

                  return (
                    <tr key={cycle.id}>
                      <td>
                        {formatDate(cycle.randomDate)}

                        {/** A hidden element to fix the autoFocus problem when the modal is closed */}
                        {index === 0 && (
                          <DefaultFocus ref={ref}></DefaultFocus>
                        )}


                      </td>
                      <td className="weekday">
                        {weekday}
                        <OpenModalButton onClick={() => onCycleIdSelected(cycle.id)}>
                          <CaretDown weight="fill" />
                        </OpenModalButton>
                      </td>
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
})