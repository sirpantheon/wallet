import ReactDOM from 'react-dom/client';
import GlobalStyle from './Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import dark from './Styles/themes/dark';
import Routes from './Routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={dark}>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>
);


