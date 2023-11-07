import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle2,
  Circle,
  XCircle,
  HelpCircle,
  Timer,
  FileInput,
  Ruler,
  Compass,
  DraftingCompass,
  BookOpenText,
  FileSearch2,
  PackageCheck,
  Hourglass,
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
    value: 'AVIZAT_RESPINS',
    label: 'Avizat / Respins',
    icon: PackageCheck,
  },
];

export const projectTypes = [
  {
    label: 'Intabulare teren / constructie',
    value: 'INTABULARE_TEREN_CONSTRUCTIE',
  },
  {
    label: 'Intabulare UI',
    value: 'INTABULARE_UI',
  },
  {
    label: 'Dezmembrare / alipire',
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
