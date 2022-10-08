import { PayPal } from "../../domain/entities/PayPal";
import { CreditCard } from "../../domain/entities/CreditCard";

// strategy pattern (https://refactoring.guru/design-patterns/strategy)

export interface Payment {
  pay(): void;
}

export class PayPalMethod implements Payment {
  account: PayPal;

  constructor(account: PayPal) {
    this.account = account;
  }

  pay(): void {
    console.log("Implementacion de pago con PayPal");
  }
}

export class CreditCardMethod implements Payment {
  card: CreditCard;

  constructor(card: CreditCard) {
    this.card = card;
  }

  pay(): void {
    console.log("Implementacion de pago mediante tarjeta de credito");
  }
}

export class PaymentStrategy {
  private payment: Payment;

  constructor(payment: Payment) {
    this.payment = payment;
  }

  pay(): void {
    this.payment.pay();
  }
}
