import { RouteDefinitions } from './RoutesDefinitions';

interface MenuItems {
  href: string;
  label: string;
}

export const menuItems: MenuItems[] = [
  { href: RouteDefinitions.house, label: 'Dom' },
  { href: RouteDefinitions.house, label: 'O nas' },
  { href: RouteDefinitions.home, label: 'Pod Śnieżnikiem' },
  { href: RouteDefinitions.house, label: 'W okolicy' },
  { href: RouteDefinitions.house, label: 'Kontakt' }
];
