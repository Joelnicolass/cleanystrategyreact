import { CreditCardGateway } from "../gateway/creditcard.gateway";
import { CreditCard } from "../entities/CreditCard";
export class CreateCreditCardUseCase {
  private _creditCardGateway: CreditCardGateway;

  constructor(creditCardGateway: CreditCardGateway) {
    this._creditCardGateway = creditCardGateway;
  }

  call(id: string, name: string, number: string): CreditCard {
    return this._creditCardGateway.createCreditCard(id, name, number);
  }
}
