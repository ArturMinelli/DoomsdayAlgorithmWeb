import { differenceInMilliseconds } from 'date-fns';
import { Cycle } from '../../contexts/CyclesContext'
import { ActionTypes } from '../actions';

export interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

export function cyclesReducer(state: CyclesState, action: any) {
  switch(action.type) {

    case ActionTypes.CREATE_NEW_CYCLE: {
      return {
        activeCycleId: action.payload.newCycle.id,
        cycles: [ ...state.cycles, action.payload.newCycle ]
      }
    }

    case ActionTypes.FINISH_CURRENT_CYCLE: {
      const newCycles = state.cycles.map((cycle) => {
        if(cycle.id === state.activeCycleId) {
          return {
            ...cycle,
            userGuess: action.payload.userGuess,
            duration: differenceInMilliseconds(new Date(), cycle.startDate)
          }
        } else {
          return cycle
        }
      })

      const newActiveCycleid = null

      return {
        cycles: newCycles,
        activeCycleId: newActiveCycleid
      }
    }

    case ActionTypes.EMPTY_CYCLES: {
      return {
        cycles: [],
        activeCycleId: null
      }
    }

  }

  return state
}