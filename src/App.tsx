import { ThemeProvider } from 'styled-components';
import theme from './constants/theme';
import GlobalStyle from './globalStyle';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home/>
    </ThemeProvider>
  );
}

export default App;
