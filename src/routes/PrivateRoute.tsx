
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../redux/hook';
import Loading from '../pages/shared/Loading';

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const { userEmail, isLoading } = useAppSelector((state) => state.auth);
  const { pathname } = useLocation();

  if (isLoading) {
    return <p><Loading/></p>;
  }
  if (!userEmail && !isLoading) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
}
