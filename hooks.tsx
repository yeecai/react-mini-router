import { useContext } from "react";
import { RouterContext } from "./MiniRouter";

export const useLocation = () => {
  return useContext(RouterContext)!.location;
};

export const useHistory = () => {
  return useContext(RouterContext)!.history;
};
