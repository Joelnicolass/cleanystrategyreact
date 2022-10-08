import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../domain/entities/user";
import { CreateUser } from "../../../infraestructure/usecasesDI/createUser.config";

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    createUser: (state, action) => {
      // se instancia nuestro caso de uso de crear un usuario
      const createUser = new CreateUser();

      // lo llamamos y le pasamos los datos (que vendrian de la vista)
      const newUser = createUser.useCase.call(
        action.payload.name,
        action.payload.email,
        action.payload.password,
        action.payload.role
      );

      // se crea el usuario y se guarda en el estado

      state.user = newUser;
    },
  },
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;
