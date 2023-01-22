export enum Role {
  USER = 'User',
  ADMIN = 'Admin',
}

export interface Profile {
  name: string;
  nickname: string;
  email: string;
  role: Role;
  imageSrc: string;
}
