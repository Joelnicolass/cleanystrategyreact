import { CreditCardServiceLocal } from "../driven-adapters/creditcard.services";
import { CreateCreditCardUseCase } from "../../domain/usecases/createCreditcard.usecase";

export class CreateCreditCard {
  private _creditCardService: CreditCardServiceLocal;
  public useCase: CreateCreditCardUseCase;

  constructor() {
    this._creditCardService = new CreditCardServiceLocal();
    this.useCase = new CreateCreditCardUseCase(this._creditCardService);
  }
}
