import { RouteDefinitions } from './RoutesDefinitions';

interface MenuItems {
  href: string;
  label: string;
}

export const menuItems: MenuItems[] = [{ href: RouteDefinitions.home, label: 'Pod Śnieżnikiem' }];
