export function emitTextToSpeech(date: string, lang: string, volume: number) {
  var msg = new SpeechSynthesisUtterance();
  msg.text = date
  msg.lang = lang
  msg.volume = volume
  speechSynthesis.speak(msg);
}