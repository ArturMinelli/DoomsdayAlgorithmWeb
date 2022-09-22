//import {  } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { FeedbackDialogContent, FeedbackDialogOverlay, FeedbackDialogPortal } from './styles'

export function UserGuessFeedbackModal() {
  const { userGuessedCorrectly } = useContext(CyclesContext)

  return (
    <Dialog.Portal>
      <FeedbackDialogOverlay>
        <FeedbackDialogContent>
          {userGuessedCorrectly ? "yeyyy" : 'nope'}
        </FeedbackDialogContent>
      </FeedbackDialogOverlay>
    </Dialog.Portal>
  )
}