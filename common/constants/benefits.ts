import { SvgIconTypeMap } from '@mui/material';
import { Component } from 'react';

export interface BenefitComponentProps {
  icon?: Component<SvgIconTypeMap<{}, 'svg'>>;
  title: string;
  description: string;
}

export const benefitsList: BenefitComponentProps[] = [
  {
    title: 'Ciszę i spokój',
    description:
      'Uwolnij się od zgiełku miast i ciesz się spokojem. Bądź otoczony lasami i górami, spędzając czas w domku Pod Śnieżnikiem'
  },
  {
    title: 'Kompleksowo wyposażeny dom',
    description:
      'W pełni wyposażony dom w wszystkie sprzęty i naczynia, tak abyś poczuł się w własnym. A dla najmłodszych plac zabaw i trampolina'
  },
  {
    title: 'Świetną lokalizację',
    description: 'Miejsce wypadowe na każdą porę roku. Latem na piesze wędrówki po górach, zimą na zjazdy narciarskie'
  }
];
