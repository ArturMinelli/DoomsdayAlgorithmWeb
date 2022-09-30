export function handleKeyboardEvents() {

  document.addEventListener('keypress', (event) => {
    document.getElementById(event.key)?.focus()
    return true
  })

  document.addEventListener('keydown', (event) => {
    if(event.key === ' ') {
      event.preventDefault()
      const startButton = document.getElementById('startButton')
      startButton?.classList.add('pressed')
      return true
    }
  })

  document.addEventListener('keyup', (event) => {
    if(event.key === ' ') {
      document.getElementById('startButton')?.click()
      return true
    }
  })

}
