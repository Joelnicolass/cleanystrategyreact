import { Role } from "../../domain/entities/role";
import { User } from "../../domain/entities/user";
import { UserGateway } from "../../domain/gateway/user.gateway";

// estos son adaptadores de infraestructura, que son los que se encargan de la comunicacion con la base de datos, la api, etc

// en este caso se implementa el gateway de usuario con una base de datos local

// podriamos tener comunicacion con una api que cree el usuario y lo retorne.
// A la vista no le importa como se crea el usuario, a nuestro dominio tampoco. Solo nos importa que se cree un usuario

// con esto ganamos mucha independencia, ya que si cambiamos la base de datos, solo tenemos que cambiar este adaptador.
// si cambiamos la api, solo tenemos que cambiar este adaptador.

// de hecho podemos tener varias implementaciones, y en base a inyeccion de dependencias elegir cual usar (usecasesDI)

export class UserServicesLocal implements UserGateway {
  createUser(id: string, name: string, email: string, role: Role): User {
    const newUser: User = {
      id: id,
      name: name,
      email: email,
      role: role,
    };

    return newUser;
  }
}
