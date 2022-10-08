import { PayPal } from "../../domain/entities/PayPal";
import { CreditCard } from "../../domain/entities/CreditCard";
import { Role } from "../../domain/entities/role";

// strategy pattern (https://refactoring.guru/design-patterns/strategy)

// con este patron de diseño podes tener independencia en las implementaciones de los metodos de pago
// y en el caso de que quieras agregar un nuevo metodo de pago, solo tienes que crear una nueva clase
// que implemente la interfaz Payment

// asi evitas un mundo de if else y switch case
// y no tenes neceisdad de modificar el codigo de la clase que usa el patron de diseño

export interface Payment {
  pay(): void;
}

export class PayPalMethod implements Payment {
  account: PayPal;

  constructor(account: PayPal) {
    this.account = account;
  }

  pay(): void {
    alert(`Paypal payment with account ${this.account.email}`);
    console.log("Implementacion de pago con PayPal");
  }
}

export class CreditCardMethod implements Payment {
  card: CreditCard;
  role: Role;

  constructor(card: CreditCard, role: Role) {
    this.card = card;
    this.role = role;
  }

  pay(): void {
    console.log("Implementacion de pago mediante tarjeta de credito");

    if (this.role !== Role.ADMIN) {
      alert("Solo los administradores pueden pagar con tarjeta de credito");
      return console.log("No tienes permiso para pagar con tarjeta de credito");
    }

    alert(`Credit card payment with card ${this.card.number}`);
  }
}

export class PaymentStrategy {
  private payment: Payment;
  private methods: Payment[] = []; // si bien no esta implementado, podes tener un array e ir seleccionando los metodos disponibles

  constructor(payment: Payment) {
    this.payment = payment;
  }

  pay(): void {
    this.payment.pay();
  }
}
