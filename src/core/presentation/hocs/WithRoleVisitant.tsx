import React from "react";
import { Role } from "../../domain/entities/role";
import { useSelector } from "react-redux";
import { RootState } from "../state/store/store";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const WithRoleVisitant = ({ children }: Props) => {
  const role = useSelector((state: RootState) => state.userReducer.user?.role);

  return <>{role === Role.VISITANT ? children : null}</>;
};

export default WithRoleVisitant;
