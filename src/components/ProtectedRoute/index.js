import { Redirect, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function ProtectedRoute({ children, ...rest }) {
  const [cookies] = useCookies(['token']);

  return <Route {...rest}>
    {cookies.token ? children : <Redirect to="/" />}
  </Route>
}
