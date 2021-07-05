export enum UserRol {
  ADMIN = 'ADMIN',
  EMPLOYE = 'EMPLOYE',
  UNDEFINED = 'UNDEFINED',
}

export type Rol = keyof typeof UserRol;

export type UserProfileType = {
  _id?: string;
  id: string;
  userName: string;
  rol: Rol;
  password?: string;
};
