import { UserGateway } from "../gateway/user.gateway";
import { Role } from "../entities/role";
import { User } from "../entities/user";

// esta es la definicion de nuestro caso de uso de crear un usuario

// no tiene implementacion directa, solo define como se va a comportar y el gateway que va a usar

export class CreateUserUseCase {
  private _userGateway: UserGateway;

  constructor(userGateway: UserGateway) {
    this._userGateway = userGateway;
  }

  call(id: string, name: string, email: string, role: Role): User {
    return this._userGateway.createUser(id, name, email, role);
  }
}
