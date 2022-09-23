import React from 'react';

import { SvgIconComponent } from '@mui/icons-material';

import LocationIcon from 'common/icons/location.svg';
import NatureIcon from 'common/icons/nature.svg';
import ComprehensiveHouse from 'common/icons/comprehensivelyEquippedHouse.svg';
export interface BenefitComponentProps {
  title: string;
  description: string;
  icon: React.ElementType<SvgIconComponent> | SvgIconComponent;
}

export const benefitsList: BenefitComponentProps[] = [
  {
    icon: NatureIcon,
    title: `Ciszę i spokój`,
    description:
      'Uwolnij się od zgiełku miast i ciesz się spokojem. Bądź otoczony lasami i górami, spędzając czas w domku Pod Śnieżnikiem.'
  },
  {
    icon: ComprehensiveHouse,
    title: 'Kompleksowo wyposażony dom',
    description:
      'W pełni wyposażony dom w wszystkie sprzęty i naczynia, tak abyś poczuł się jak w własnym. Dla najmłodszych szereg atrakcji takich jak plac zabaw lub trampolina.'
  },
  {
    icon: LocationIcon,
    title: 'Świetną lokalizację',
    description:
      'Miejsce wypadowe na każdą porę roku. Latem na piesze górskie wędrówki, a zimą na białe wojaże po stokach.'
  }
];
