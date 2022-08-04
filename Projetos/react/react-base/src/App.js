import { Router } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './Routes';
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
    </ Router>
  );
}

export default App;
