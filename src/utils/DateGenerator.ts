import { format } from 'date-fns'

export interface WeekdayAnswer {
  day: number;
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

const monthsInfo: number[] = [
  0,
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

const centuriesInfo: CenturiesInfo = {
  1700: 1,
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
  const day = date.getDay()

  // Helper variables
  const century = Math.floor(year / 100) * 100
  const decade = year - century
  const leapYearException = (decade % 4 === 0 && month === 1 || month === 2)
  const monthDoomsday = leapYearException ? monthsInfo[month] + 1 : monthsInfo[month]

  // Doomsday Algorithm
  const dayToMonthDoomsdayOffset = (day - monthDoomsday) % 7
  const centuryCode = centuriesInfo[century as CenturiesInfoKey]
  const divisionDecadeByTwelve = Math.floor(decade / 12)
  const remainderDecadeByTwelve = decade % 12
  const divisionRemainderByFour = Math.floor(remainderDecadeByTwelve / 4)

  const weekday = (dayToMonthDoomsdayOffset + centuryCode + divisionDecadeByTwelve + remainderDecadeByTwelve + divisionRemainderByFour) % 7

  return {
    day: weekday,
    steps: {
      dayToMonthDoomsdayOffset,
      centuryCode,
      divisionDecadeByTwelve,
      remainderDecadeByTwelve,
      divisionRemainderByFour,
    }
  }
}

export function formatDate(date: Date) {
  return format(new Date(date), "LLLL d',' u")
}
