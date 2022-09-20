interface MonthInfo {
  doomsday: number;
  length: number;
}

interface MonthsInfo {
  january: MonthInfo;
  february:MonthInfo;
  march:MonthInfo;
  april:MonthInfo;
  may:MonthInfo;
  june:MonthInfo;
  july:MonthInfo;
  august:MonthInfo;
  september:MonthInfo;
  october:MonthInfo;
  november:MonthInfo;
  december:MonthInfo;
}

type MonthsInfoKey = keyof MonthsInfo

interface CenturiesInfo {
  1700: number;
  1800: number;
  1900: number;
  2000: number;
}

type CenturiesInfoKey = keyof CenturiesInfo

export interface Date {
  year: number;
  month: string;
  day: number;
}

export class DateGenerator {
  monthsInfo: MonthsInfo;
  centuriesInfo: CenturiesInfo;

  constructor() {
    this.monthsInfo = {
      january: {
        doomsday: 3,
        length: 31,
      },
      february: {
        doomsday: 28,
        length: 28,
      },
      march: {
        doomsday: 14,
        length: 31,
      },
      april: {
        doomsday: 4,
        length: 30,
      },
      may: {
        doomsday: 9,
        length: 31,
      },
      june: {
        doomsday: 6,
        length: 30,
      },
      july: {
        doomsday: 11,
        length: 31,
      },
      august: {
        doomsday: 8,
        length: 31,
      },
      september: {
        doomsday: 5,
        length: 30,
      },
      october: {
        doomsday: 10,
        length: 31,
      },
      november: {
        doomsday: 7,
        length: 30,
      },
      december: {
        doomsday: 12,
        length: 31,
      },
    }
    this.centuriesInfo = {
      1700: 1,
      1800: 5,
      1900: 3,
      2000: 2,
    }
  }

  public generateDate(from: number, to: number): Date {
    const year = this.getRandomYear(from, to)
    const month = this.getRandomMonth()
    let day = this.getRandomDay(year, month)

    return {year, month, day}
  }

  private getRandomYear(from: number, to: number): number {
    return this.randomInt(from, to)
  }

  private getRandomMonth(): string {
    let months = Object.keys(this.monthsInfo)
    let month = months[this.randomInt(0, 12)]
    return month
  }

  private getRandomDay(year: number, month: string): number {
    let monthLength = this.monthsInfo[month as MonthsInfoKey].length

    if(month === 'february' && year % 4 === 0) {
      return this.randomInt(1, monthLength + 2)
    } else {
      return this.randomInt(1, monthLength + 1)
    }
  }

  private randomInt(from: number, to: number): number {
    return Math.floor(Math.random() * (to - from) ) + from
  }

  public getWeekday(date: Date): number {
    const { year, month, day } = date

    // Helper variables
    const century = Math.floor(year / 100) * 100
    const decade = year - century
    const leapYearException = (decade % 4 === 0 && month === 'january' || month === 'february')
    const monthDoomsday = leapYearException ? this.monthsInfo[month as MonthsInfoKey].doomsday + 1 : this.monthsInfo[month as MonthsInfoKey].doomsday

    // Doomsday Algorithm
    const dayToMonthDoomsdayOffset = (day - monthDoomsday) % 7
    const centuryCode = this.centuriesInfo[century as CenturiesInfoKey]
    const divisionDecadeByTwelve = Math.floor(decade / 12)
    const remainderDecadeByTwelve = decade % 12
    const divisionRemainderByFour = Math.floor(remainderDecadeByTwelve / 4)

    return (dayToMonthDoomsdayOffset + centuryCode + divisionDecadeByTwelve + remainderDecadeByTwelve + divisionRemainderByFour) % 7
  }

}
