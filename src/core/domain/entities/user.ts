import { Role } from "./role";

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export class User implements IUser {
  id: string;
  name: string;
  email: string;
  role: Role;

  constructor(id: string, name: string, email: string, role: Role) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
  }
}
