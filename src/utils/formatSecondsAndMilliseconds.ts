export function formatSecondsAndMilliseconds([seconds, milliseconds]: string[]): string {
  return `${seconds}.${milliseconds}s`
}