export type AllSurah = {
  number: number,
  numberOfAyahs: number,
  name: string,
  translation:string,
  revelation: 'Makkiyah' | 'Madaniyah',
  description: string,
  audio: string
};

export type SurahByNumberOfSurah = {
  bismillah: {
    arab: string,
    translation: string,
    audio: {
      [index: string]: string
    }
  },
  ayahs: Ayah[]
} & AllSurah;

export type Ayah = {
  number: {
    inQuran: number,
    inSurah: number,
  },
  arab: string,
  translation: string,
  audio: {
    alafasy: string,
    ahmedajamy: string,
  },
  image: {
    primary: string,
    secondary: string,
  },
  tafsir: {
    kemenag: {
      short: string,
      long: string
    },
    quraish:string
    jalalayn: string
  },
};
