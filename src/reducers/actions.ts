import { Cycle } from "../contexts/CyclesContext"


export enum ActionTypes {
  CREATE_NEW_CYCLE = "CREATE_NEW_CYCLE",
  FINISH_CURRENT_CYCLE = "FINISH_CURRENT_CYCLE"
}

export function createNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.CREATE_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function finishCurrentCycleAction() {
  return {
    type: ActionTypes.FINISH_CURRENT_CYCLE,
  }
}