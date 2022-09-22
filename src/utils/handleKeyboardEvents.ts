export function handleKeyboardEvents() {

  document.addEventListener('keydown', (event) => {
    if(event.key === ' ') {
      const startButton = document.getElementById('startButton')
      startButton?.classList.add('pressed')
    }

    document.getElementById(event.key)?.focus()
  })

  document.addEventListener('keyup', (event) => {
    if(event.key === ' ') {
      document.getElementById('startButton')?.click()
    }
  })

}
