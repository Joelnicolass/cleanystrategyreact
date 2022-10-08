import React, { useEffect, useState } from "react";
import MemberCart from "../components/MemberCart";
import VisitantCart from "../components/VisitantCart";
import WithRoleAdmin from "../../../core/presentation/hocs/WithRoleAdmin";
import WithRoleVisitant from "../../../core/presentation/hocs/WithRoleVisitant";
import WithRole from "../../../core/presentation/hocs/WithRole";
import { Role } from "../../../core/domain/entities/role";
import { CreditCard } from "../../../core/domain/entities/CreditCard";
import { PayPal } from "../../../core/domain/entities/PayPal";
import { useSelector } from "react-redux";
import { RootState } from "../../../core/presentation/state/store/store";
import {
  PaymentStrategy,
  CreditCardMethod,
  PayPalMethod,
} from "../../../core/infraestructure/driven-adapters/payment.services";

type Props = {};

const Cart = (props: Props) => {
  const role = useSelector((state: RootState) => state.userReducer.user?.role);

  const [visa, setVisa] = useState<CreditCard>(
    new CreditCard("23fd3", "Visa", "12312-23423-12312")
  );
  const [payPal, setPayPal] = useState<PayPal>(
    new PayPal("1231ref1", "jns@gmail.com")
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* aca van ejemplos de como se puede plantear el tener componentes segun algun rol especifico */}
      <div>
        <h3>CONTENIDO DE TODOS</h3>
        <h1>👖</h1>
      </div>

      {/* estas opciones son mas imperativas, pero a veces resulta mas limpio, depende de que evalues en el HoC */}
      <WithRoleAdmin>
        <h3>CONTENIDO DE ADMINISTRADOR</h3>
        <h1>⚜</h1>
      </WithRoleAdmin>

      <WithRoleVisitant>
        <h3>CONTENIDO DE VISITANTES</h3>
        <VisitantCart />
      </WithRoleVisitant>

      {/* esta es la mas escalable, en un componente tenes n cantidad de posibilidades */}
      <WithRole role={Role.MEMBER}>
        <h3>CONTENIDO DE MIEMBROS</h3>
        <MemberCart />
      </WithRole>

      <button
        onClick={() => {
          // estp es un ejemplo de como se usa el servicio de pago con strategy pattern
          const creditCardMethod = new CreditCardMethod(visa);
          const paypalMethod = new PayPalMethod(payPal);

          // esto se podria hacer tambien con hocs
          const payment = new PaymentStrategy(
            role === Role.ADMIN ? creditCardMethod : paypalMethod
          );

          payment.pay();
        }}
      >
        pagar
      </button>
    </div>
  );
};

export default Cart;
