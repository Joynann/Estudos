import { Route, Redirect } from 'react-router-dom';

export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return (
      <Redirect to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }} />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />
}

// Instalar prop-types futuramente caso necessário.
