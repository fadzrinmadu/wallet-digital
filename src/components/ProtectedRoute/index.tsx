import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';

interface ProtectedRouteProps {
  children: React.ReactNode;
  exact?: boolean;
  path: string;
}

export default function ProtectedRoute({ children, ...rest }: ProtectedRouteProps) {
  const [cookies] = useCookies(['token']);

  return <Route {...rest}>
    {cookies.token ? children : <Redirect to="/" />}
  </Route>
}
