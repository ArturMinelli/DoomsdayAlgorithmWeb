import { Cycle } from "../../contexts/CyclesContext"


export enum ActionTypes {
  CREATE_NEW_CYCLE = "CREATE_NEW_CYCLE",
  STOP_TIMER = "STOP_TIMER",
  FINISH_CURRENT_CYCLE = "FINISH_CURRENT_CYCLE",
  EMPTY_CYCLES = "EMPTY_CYCLES",
}

export function createNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.CREATE_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function stopTimerAction(userGuess: string) {
  return {
    type: ActionTypes.STOP_TIMER,
    payload: {
      userGuess,
    },
  }
}

export function finishCurrentCycleAction() {
  return {
    type: ActionTypes.FINISH_CURRENT_CYCLE,
  }
}

export function emptyCyclesAction() {
  return {
    type: ActionTypes.EMPTY_CYCLES,
  }
}
