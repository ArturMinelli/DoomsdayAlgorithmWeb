export enum ActionTypes {
  TOGGLE_TEXT_TO_SPEECH = "TOGGLE_TEXT_TO_SPEECH",
  CHANGE_TEXT_TO_SPEECH_VOLUME = "CHANGE_TEXT_TO_SPEECH_VOLUME",
  TOGGLE_DATE_FADE_OUT = "TOGGLE_DATE_FADE_OUT",
  CHANGE_DATE_FADE_OUT_DURATION = "CHANGE_DATE_FADE_OUT_DURATION",
}

export function toggleTextToSpeechAction() {
  return {
    type: ActionTypes.TOGGLE_TEXT_TO_SPEECH,
  }
}

export function changeTextToSpeechVolumeAction(volume: number) {
  return {
    type: ActionTypes.CHANGE_TEXT_TO_SPEECH_VOLUME,
    payload: {
      volume,
    }
  }
}

export function toggleDateFadeOutAction() {
  return {
    type: ActionTypes.TOGGLE_DATE_FADE_OUT,
  }
}

export function changeDateFadeOutDurationAction(duration: number) {
  return {
    type: ActionTypes.CHANGE_DATE_FADE_OUT_DURATION,
    payload: {
      duration,
    }
  }
}
