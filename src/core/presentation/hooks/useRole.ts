import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Role } from "../../domain/entities/role";
import { RootState } from "../state/store/store";

const useRole = () => {
  const state = useSelector<RootState>((state) => state.userReducer.user?.role);

  // si no esta logueado, el role se define como visitante
  const [role, setRole] = useState<Role>(Role.VISITANT);

  useEffect(() => {
    state && setRole(state as Role);
  }, [state]);

  const isRolePermitted = (roleToCheck: Role) => {
    return role === roleToCheck;
  };

  return { role, isRolePermitted };
};

export default useRole;
