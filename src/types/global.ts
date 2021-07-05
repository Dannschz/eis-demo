import { Rol } from './userprofile';

export type NavLinksMenuType = Array<{
  to: string;
  title: string;
  imgPath: string;
  rol: Rol;
}>;
