import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./core/presentation/state/store/store";
import { createUser } from "./core/presentation/state/slices/user.slice";
import { IUser } from "./core/domain/entities/user";
import { Role } from "./core/domain/entities/role";
import Cart from "./features/cart/view/Cart";
type Props = {};

const App = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <button
        onClick={() => {
          // te dejo de ejemplo como se haria una implementacion de creacion de usuario en clean architecture
          // con algunas cositas de redux, esta pensado como para aplicar DDD... No es necesario que tomes esto, te lo dejo
          // porque suele ser lo mas escalable. Pero lleva tiempo implementarlo, y lleva tiempo aprenderlo.

          // le faltan capas, pero es para que te des una idea de como se puede plantear

          // estos datos los tomarias de los inputs del formulario (que no existe)
          const newUser: IUser = {
            id: "1",
            email: "joelnicolass@gmail.com",
            name: "Joel",
            role: Role.ADMIN,
          };

          // este dispatch manda a llamar al slice de redux, que a su vez llama al caso de uso.
          // de esa manera la logica de negocio no depende de redux, y queda totalmente agnostica de la vista
          // el estado lo maneja redux, pero la logica de negocio no depende de eso
          dispatch(createUser(newUser));
        }}
      >
        login admin
      </button>

      <button
        onClick={() => {
          const newUser: IUser = {
            id: "1",
            email: "joelnicolass@gmail.com",
            name: "Joel",
            role: Role.VISITANT,
          };

          dispatch(createUser(newUser));
        }}
      >
        login visitant
      </button>

      <button
        onClick={() => {
          const newUser: IUser = {
            id: "1",
            email: "joelnicolass@gmail.com",
            name: "Joel",
            role: Role.MEMBER,
          };

          dispatch(createUser(newUser));
        }}
      >
        login member
      </button>

      <Cart />
    </div>
  );
};

export default App;
