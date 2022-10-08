import { Role } from "../entities/role";
import { User } from "../entities/user";

// esta es la definicion que vamos a tomar como punto de partida para nuestro caso de uso de crear un usuario

// lo van a implementar los adaptadores de infraestructura, que son los que se encargan de la comunicacion con la base de datos, la api, etc

export interface UserGateway {
  createUser(id: string, name: string, email: string, role: Role): User;
}
