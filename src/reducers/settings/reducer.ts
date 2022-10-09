import { ActionTypes } from "./actions";
import { produce } from 'immer'

export interface SettingsState {
  textToSpeech: TextToSpeech
  dateFadeOut: DateFadeOut
}

export interface TextToSpeech {
  active: boolean;
  volume: number;
}

export interface DateFadeOut {
  active: boolean;
  duration: number;
}

export function settingsReducer(state: SettingsState, action: any) {
  switch (action.type) {
    case ActionTypes.TOGGLE_TEXT_TO_SPEECH: {
      const newState = produce(state, (draft) => {
        draft.textToSpeech.active = !draft.textToSpeech.active
      })

      return newState
    }

    case ActionTypes.CHANGE_TEXT_TO_SPEECH_VOLUME: {
      const newState = produce(state, (draft) => {
        draft.textToSpeech.volume = action.payload.volume
      })

      return newState
    }

    case ActionTypes.TOGGLE_DATE_FADE_OUT: {
      const newState = produce(state, (draft) => {
        draft.dateFadeOut.active = !draft.dateFadeOut.active
      })

      return newState
    }

    case ActionTypes.CHANGE_DATE_FADE_OUT_DURATION: {
      const newState = produce(state, (draft) => {
        draft.dateFadeOut.duration = action.payload.duration
      })

      return newState
    }

  }

  return state
}