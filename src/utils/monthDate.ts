export const months = {
  0: () => ({ strMonth: 'enero', month: 0 }),
  1: () => ({ strMonth: 'febrero', month: 1 }),
  2: () => ({ strMonth: 'marzo', month: 2 }),
  3: () => ({ strMonth: 'abril', month: 3 }),
  4: () => ({ strMonth: 'mayo', month: 4 }),
  5: () => ({ strMonth: 'junio', month: 5 }),
  6: () => ({ strMonth: 'julio', month: 6 }),
  7: () => ({ strMonth: 'agosto', month: 7 }),
  8: () => ({ strMonth: 'septiembre', month: 8 }),
  9: () => ({ strMonth: 'octubre', month: 9 }),
  10: () => ({ strMonth: 'noviembre', month: 10 }),
  11: () => ({ strMonth: 'diciebre', month: 11 })
}

export type MonthNumber = keyof typeof months

export default function monthDate(dateMonth: MonthNumber) {
  return months[dateMonth] ? months[dateMonth]() : { strMonth: '', month: -1 }
}
