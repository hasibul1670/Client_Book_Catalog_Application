import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/shared/Loading";
import { useAppSelector } from "../redux/hook";

interface IProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: IProps) => {
  const { userEmail, isLoading } = useAppSelector((state) => state.auth);
  const location = useLocation();

  


  if (userEmail) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;

// export default function PrivateRoute({ children }: IProps) {
//   const { userEmail, isLoading } = useAppSelector((state) => state.auth);
//   const { pathname } = useLocation();

//   if (isLoading) {
//     return <p><Loading/></p>;
//   }
//   if (!userEmail) {
//     return <Navigate to="/login" state={{ path: pathname }} />;
//   }

//   return children;
// }
