import {
  FileInput,
  Ruler,
  DraftingCompass,
  BookOpenText,
  FileSearch2,
  PackageCheck,
  Hourglass,
  PackageX,
} from 'lucide-react';

export const projectStatuses = [
  {
    value: 'CONTRACTAT',
    label: 'Contractat',
    icon: FileInput,
  },
  {
    value: 'MASURAT',
    label: 'Măsurat',
    icon: Ruler,
  },
  {
    value: 'PRELUCARE_MASURATORI',
    label: 'Prelucare măsurători',
    icon: DraftingCompass,
  },
  {
    value: 'INTOCMIRE_DOCUMENTATIE',
    label: 'Întocmire documentație',
    icon: BookOpenText,
  },
  {
    value: 'VERIFICARE_DOCUMENTATIE',
    label: 'Verificare documentație',
    icon: FileSearch2,
  },
  {
    value: 'DEPUS',
    label: 'Depus',
    icon: Hourglass,
  },
  {
    value: 'AVIZAT',
    label: 'Avizat',
    icon: PackageCheck,
  },
  {
    value: 'RESPINS',
    label: 'Respins',
    icon: PackageX,
  },
];

export const projectTypes = [
  {
    label: 'Intabulare teren / Constructie',
    value: 'INTABULARE_TEREN_CONSTRUCTIE',
  },
  {
    label: 'Intabulare UI',
    value: 'INTABULARE_UI',
  },
  {
    label: 'Dezmembrare / Alipire',
    value: 'DEZMEMBRARE_ALIPIRE',
  },
  {
    label: 'Apartamentare',
    value: 'APARTAMENTARE',
  },
  {
    label: 'Ridicare',
    value: 'RIDICARE',
  },
];
