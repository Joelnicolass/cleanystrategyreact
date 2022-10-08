import { CreditCard } from "../entities/CreditCard";

export interface CreditCardGateway {
  createCreditCard(id: string, name: string, number: string): CreditCard;
}
