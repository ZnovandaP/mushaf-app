type NumberOfSurah = string | number;

type NumberOfAyah = NumberOfSurah;

export const quranApiConfig = {
  baseUrl: import.meta.env.MUSHAF_APP_BASE_URL_QURAN,

  urlGetAllSurah() {
    return `${this.baseUrl}surahs`;
  },

  urlGetSurahByNumberOfSurah(numberOfSurah: NumberOfSurah) {
    return `${this.baseUrl}surahs/${numberOfSurah}`;
  },

  urlGetAllAyahFromSurah(numberOfSurah: NumberOfSurah) {
    return `${this.baseUrl}surahs/${numberOfSurah}/ayahs`;
  },

  urlGetSpesificAyahFromSurah(
    numberOfSurah: NumberOfSurah,
    numberOfAyah: NumberOfAyah,
  ) {
    return `${this.baseUrl}surahs/${numberOfSurah}/ayahs/${numberOfAyah}`;
  },

  urlGetRandomAyah() {
    return `${this.baseUrl}random`;
  },
};

export const doaHarianApiConfig = {
  baseUrl: import.meta.env.MUSHAF_APP_BASE_URL_API,

  urlGetAllDoa() {
    return `${this.baseUrl}api/doaharian`;
  },

};

export const doaTahlilApiConfig = {
  baseUrl: import.meta.env.MUSHAF_APP_BASE_URL_API,

  urlGetAllDoa() {
    return `${this.baseUrl}api/tahlil`;
  },
};

export const asmaulAlhusnaApiConfig = {
  baseUrl: import.meta.env.MUSHAF_APP_BASE_URL_API,

  urlGetAsmaulAlhusna() {
    return `${this.baseUrl}api/asmaulhusna`;
  },
};
