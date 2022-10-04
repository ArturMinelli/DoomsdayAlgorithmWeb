import { format } from 'date-fns'

export interface WeekdayAnswer {
  day: number;
  helperVariables: {
    century: number;
    decade: number;
    monthDoomsday: number;
  }
  steps: {
    dayToMonthDoomsdayOffset: number
    centuryCode: number
    divisionDecadeByTwelve: number
    remainderDecadeByTwelve: number
    divisionRemainderByFour: number
  }
}

interface CenturiesInfo {
  1700: number;
  1800: number;
  1900: number;
  2000: number;
}

type CenturiesInfoKey = keyof CenturiesInfo

export const monthsInfo: number[] = [
  3,
  28,
  14,
  4,
  9,
  6,
  11,
  8,
  5,
  10,
  7,
  12
]

export const centuriesInfo: CenturiesInfo = {
  1700: 0,
  1800: 5,
  1900: 3,
  2000: 2,
}

export const weekdaysInfo: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

export function getRandomDate(start: Date = new Date(1700, 1, 1), end: Date = new Date(2099, 12, 31 )) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export function getWeekday(date: Date): WeekdayAnswer {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  // Helper variables
  const century = Math.floor(year / 100) * 100
  const decade = year - century
  const leapYearException = decade % 4 === 0 && (month === 0 || month === 1)
  const monthDoomsday = leapYearException ? monthsInfo[month] + 1 : monthsInfo[month]

  // Doomsday Algorithm
  const dayToMonthDoomsdayOffset = (day - monthDoomsday)
  const centuryCode = centuriesInfo[century as CenturiesInfoKey]
  const divisionDecadeByTwelve = Math.floor(decade / 12)
  const remainderDecadeByTwelve = decade % 12
  const divisionRemainderByFour = Math.floor(remainderDecadeByTwelve / 4)

  const weekday = (dayToMonthDoomsdayOffset + centuryCode + divisionDecadeByTwelve + remainderDecadeByTwelve + divisionRemainderByFour) % 7
  return {
    day: weekday,
    helperVariables: {
      century,
      decade,
      monthDoomsday,
    },
    steps: {
      dayToMonthDoomsdayOffset,
      centuryCode,
      divisionDecadeByTwelve,
      remainderDecadeByTwelve,
      divisionRemainderByFour,
    }
  }
}

export function formatDate(date: Date): string {
  return format(new Date(date), "LLLL d',' u")
}

export function formatMonth(date: Date): string {
  return format(new Date(date), "LLLL").toLowerCase()
}

export function formatMonthAndDay(date: Date): string {
  return format(new Date(date), "MMMM do").toLowerCase()
}

export function formatDay(date: Date): string {
  return format(new Date(date), "cccc").toLowerCase()
}
