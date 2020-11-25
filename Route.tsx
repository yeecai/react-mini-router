// Route take path and children as props
// It decides which component to render by path
// It's main function it's to check whether the path matches location

import React, { ReactNode } from "react";
import { useLocation } from "./hooks";

interface RouteProps {
  path: string;
  children: ReactNode;
}

export const Route = ({ path, children }: RouteProps) => {
  const { pathname } = useLocation();
  return path === pathname ? <>{children}</> : null;
};
