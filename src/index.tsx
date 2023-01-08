import ReactDOM from 'react-dom/client';
import GlobalStyle from './Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
<<<<<<< HEAD
<<<<<<< HEAD
import { dark } from './Styles/themes/themes';
=======
import { dark, light } from './Styles/themes/themes';
>>>>>>> parent of 1149e0e (themes)
=======
import { dark, light } from './Styles/themes/themes';
>>>>>>> parent of 1149e0e (themes)
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


