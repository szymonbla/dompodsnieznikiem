import React from 'react';

import { SvgIconComponent } from '@mui/icons-material';

import GoogleLogo from 'common/icons/googleLogo.svg';
import NocowanieLogo from 'common/icons/nocowanieLogo.svg';
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
      'Wspaniale miejsce na wypoczynek. Dom urządzony bardzo przemyślanie, niczego nie brakuje. Duży ogród i zabawki to sprawdzony sposób na zajęcie dla dzieci. Kawa na tarasie - marzenie ❤️',
    sourceIcon: GoogleLogo,
    ratingValue: 5,
    reviewLink: 'https://goo.gl/maps/6n187yVaZoeoSjkr5'
  },
  {
    review:
      'Rewelacja miejsce, cisza spokój, duża przestrzeń zarówno w domu jak i na zewnątrz. Dom czyściutki, mnóstwo udogodnień; ekspres do kawy, zmywarka. Baza do wypadów , zwiedzania okolicy. Super kontakt z Panem Wiesławem(właścicielem) który jest bardzo pomocny, i można na niego liczy w każdej sprawie.',
    sourceIcon: NocowanieLogo,
    ratingValue: 5,
    reviewLink: 'https://www.nocowanie.pl/noclegi/miedzygorze/domki/162457/'
  },
  {
    review:
      'Obiekt odwiedziliśmy już 3ci raz i za każdym razem pelne zadowolenie :) nie brakowało niczego, domek piękny, zadbany, Gospodarczy bardzo pomocny i miły. Przepiękna okolica Serdecznie pozdrawiamy na pewno wrócimy! Kacper',
    sourceIcon: NocowanieLogo,
    ratingValue: 5,
    reviewLink: 'https://www.nocowanie.pl/noclegi/miedzygorze/domki/162457/'
  },
  {
    review:
      'Byliśmy z rodziną teraz w okresie świątecznym.Jesteśmy bardzo zadowoleni.Pan Wiesław jest bardzo profesjonalny,dba o każdy drobiazg,zeby nikomu nic nie zabrakło i aby goście byli zadowoleni z pobytu.Domek przepiękny,W cichej okolicy,najlepszy do odpoczynku.Niczego nie brakuje.Napewno wrócimy jeszcze,jak tylko bedzie wolny termin.Pozdrawiam i życzę wszystkim dobrego wyboru.',
    sourceIcon: NocowanieLogo,
    ratingValue: 5,
    reviewLink: 'https://www.nocowanie.pl/noclegi/miedzygorze/domki/162457/'
  }
];
