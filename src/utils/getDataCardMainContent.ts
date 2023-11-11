/* eslint-disable max-len */
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MosqueIcon from '@mui/icons-material/Mosque';
import StarIcon from '@mui/icons-material/Star';
import NightsStayIcon from '@mui/icons-material/NightsStay';

const dataCardMainContent = [
  {
    id: 1,
    title: 'Al-Quran',
    Icon: LocalLibraryIcon,
    tagline: 'Surah Al-Quran yang Lengkap',
    desc: 'Menyediakan Surah-surah Al-Quran dengan lengkap. Terdapat fitur audio, terjemahan, dan tafsir dari berbagai ahli tafsir',
    to: 'quran',
  },
  {
    id: 2,
    title: 'Doa Harian',
    Icon: StarIcon,
    tagline: 'Doa Harian yang Lengkap',
    desc: 'Menyediakan Doa-doa Harian yang dapat diamalkan oleh anda sehari-hari, tersedia latin dan terjemahaanya.',
    to: 'doa-harian',
  },
  {
    id: 3,
    title: 'Doa Tahlil',
    Icon: NightsStayIcon,
    tagline: 'Doa Tahlil yang Lengkap',
    desc: 'Menyediakan Doa-doa Tahlil dengan lengkap. Doa Tahlil ini berdasarkan Buku Majmu\' Syarif, yang dapat anda amalkan',
    to: 'doa-tahlil',
  },
  {
    id: 4,
    title: 'Asmaul-Alhusna',
    Icon: MosqueIcon,
    tagline: 'Asmaul-Alhusna (Bonus)',
    desc: 'Menyediakan 99 daftar Asma-asma Allah SWT. beserta latin dan artinya yang dapat anda amalkan dan anda hafalkan.',
    to: 'asmaul-alhusna',
  },
];

export default dataCardMainContent;
