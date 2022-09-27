export function millisecondsToSeconds(milliseconds: number): string[] {
  const seconds = Math.floor(milliseconds / 1000)
  const newMilliseconds = milliseconds % 1000
  const paddedSeconds = seconds.toString().padStart(2, '0')
  const paddedMilliseconds = newMilliseconds.toString().padStart(3, '0')

  return [paddedSeconds, paddedMilliseconds]
}