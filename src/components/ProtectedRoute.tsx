import { Navigate } from "react-router-dom";
import { useUserStore } from "@/states/userStore";
import { ReactElement } from "react";



export default function ProtectedRoute({children}: {children: ReactElement | ReactElement[]}) {
  const { user } = useUserStore();

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}
