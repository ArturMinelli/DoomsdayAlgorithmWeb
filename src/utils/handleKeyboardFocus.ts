export function setFocusWihtKeyboard(event: KeyboardEvent) {
  document.getElementById(event.key)?.focus()
}

export function clearFocus() {
  (document.activeElement as HTMLElement).blur()
}
