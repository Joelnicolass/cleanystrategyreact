import { CreateUserUseCase } from "../../domain/usecases/createUser.usecase";
import { UserServicesLocal } from "../driven-adapters/user.services";

export class CreateUser {
  // podriamos simplemmente llamar a otro servicio, siempre y cuando devuelva un usuario, no importa como se implemente
  private _userDrivenAdapter: UserServicesLocal;
  public useCase: CreateUserUseCase;

  constructor() {
    this._userDrivenAdapter = new UserServicesLocal();
    this.useCase = new CreateUserUseCase(this._userDrivenAdapter);
  }
}
