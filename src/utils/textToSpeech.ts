export function textToSpeech(date: string) {
  var msg = new SpeechSynthesisUtterance();
  msg.text = date
  msg.lang = 'en'
  speechSynthesis.speak(msg);
}