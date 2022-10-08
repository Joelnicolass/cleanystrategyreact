import { CreditCardGateway } from "../../domain/gateway/creditcard.gateway";
import { CreditCard } from "../../domain/entities/CreditCard";

export class CreditCardServiceLocal implements CreditCardGateway {
  createCreditCard(id: string, name: string, number: string): CreditCard {
    const newCreditCard: CreditCard = {
      id: id,
      name: name,
      number: number,
    };

    return newCreditCard;
  }
}
