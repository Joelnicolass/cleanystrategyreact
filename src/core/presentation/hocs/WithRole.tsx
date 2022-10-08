import React from "react";
import { Role } from "../../domain/entities/role";
import { useSelector } from "react-redux";
import { RootState } from "../state/store/store";

type Props = {
  children: JSX.Element | JSX.Element[];
  role: Role;
};

const WithRole = ({ children, role }: Props) => {
  const userRole = useSelector(
    (state: RootState) => state.userReducer.user?.role
  );

  return <>{userRole === role ? children : null}</>;
};

export default WithRole;
