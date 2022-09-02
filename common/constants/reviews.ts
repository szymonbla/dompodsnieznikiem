import React from 'react';

import { SvgIconComponent } from '@mui/icons-material';
import GoogleLogo from 'common/icons/googleLogo.svg';

export interface ReviewTileProps {
  review: string;
  sourceIcon: React.ElementType<SvgIconComponent> | SvgIconComponent;
  ratingValue: number;
  reviewLink: string;
}

export const reviewTiles: ReviewTileProps[] = [
  {
    review:
      'Domek dobrze wyposażony, nawet dla 10 do 12 osób, zadbany, gigantyczny zielony ogród, sporo miejsca dla każdego, okolica cicha z ładnymi widokami. W pobliżu szlaki rowerowe. Super lokalizacja na zwiedzanie Kotliny Kłodzkiej. Polecam dla rodzin i dobrych znajomych. Miłym gestem była butelka wina na przywitanie.',
    sourceIcon: GoogleLogo,
    ratingValue: 5,
    reviewLink: 'https://goo.gl/maps/Eys3XeADN3gZxUXJ7'
  },
  {
    review:
      'Domek dobrze wyposażony, nawet dla 10 do 12 osób, zadbany, gigantyczny zielony ogród, sporo miejsca dla każdego, okolica cicha z ładnymi widokami. W pobliżu szlaki rowerowe. Super lokalizacja na zwiedzanie Kotliny Kłodzkiej. Polecam dla rodzin i dobrych znajomych. Miłym gestem była butelka wina na przywitanie.',
    sourceIcon: GoogleLogo,
    ratingValue: 5,
    reviewLink: 'https://goo.gl/maps/Eys3XeADN3gZxUXJ7'
  },
  {
    review:
      'Domek dobrze wyposażony, nawet dla 10 do 12 osób, zadbany, gigantyczny zielony ogród, sporo miejsca dla każdego, okolica cicha z ładnymi widokami. W pobliżu szlaki rowerowe. Super lokalizacja na zwiedzanie Kotliny Kłodzkiej. Polecam dla rodzin i dobrych znajomych. Miłym gestem była butelka wina na przywitanie.',
    sourceIcon: GoogleLogo,
    ratingValue: 5,
    reviewLink: 'https://goo.gl/maps/Eys3XeADN3gZxUXJ7'
  },
  {
    review:
      'Domek dobrze wyposażony, nawet dla 10 do 12 osób, zadbany, gigantyczny zielony ogród, sporo miejsca dla każdego, okolica cicha z ładnymi widokami. W pobliżu szlaki rowerowe. Super lokalizacja na zwiedzanie Kotliny Kłodzkiej. Polecam dla rodzin i dobrych znajomych. Miłym gestem była butelka wina na przywitanie.',
    sourceIcon: GoogleLogo,
    ratingValue: 5,
    reviewLink: 'https://goo.gl/maps/Eys3XeADN3gZxUXJ7'
  },
  {
    review:
      'Domek dobrze wyposażony, nawet dla 10 do 12 osób, zadbany, gigantyczny zielony ogród, sporo miejsca dla każdego, okolica cicha z ładnymi widokami. W pobliżu szlaki rowerowe. Super lokalizacja na zwiedzanie Kotliny Kłodzkiej. Polecam dla rodzin i dobrych znajomych. Miłym gestem była butelka wina na przywitanie.',
    sourceIcon: GoogleLogo,
    ratingValue: 5,
    reviewLink: 'https://goo.gl/maps/Eys3XeADN3gZxUXJ7'
  }
];
