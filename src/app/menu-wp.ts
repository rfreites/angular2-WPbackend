import { MenuLinkWP } from './menu-link-wp';
import { Meta } from './Meta';

export class MenuWP {
  ID: number;
  name: string;
  slug: string;
  description: string;
  count: number;
  items: Array<MenuLinkWP>;
  meta: Meta;
}
