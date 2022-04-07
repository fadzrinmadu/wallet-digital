import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';

interface UnProtectedRouteProps {
  children: React.ReactNode;
  exact?: boolean;
  path: string;
}

export default function UnprotectedRoute({ children, ...rest }: UnProtectedRouteProps) {
  const [cookies] = useCookies(['token']);

  return <Route {...rest}>
    {cookies.token ? <Redirect to="/home" /> : children}
  </Route>
}
