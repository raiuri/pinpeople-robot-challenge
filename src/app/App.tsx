import { ThemeProvider } from 'styled-components';
import { theme } from './config/styles';
import Table from './components/table';
import { Container, GlobalStyles } from './components/styledComponents';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container width={1} flexDirection="column">
        <Table />
      </Container>
    </ThemeProvider>
  )
}

export default App
