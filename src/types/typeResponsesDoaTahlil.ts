export type DoaTahlil = {
  id: number
  title: string
  arabic: string
  translation: string
};

export type AllDoaTahlil = {
  source: string
  based_on: string
  data: DoaTahlil[]
};
