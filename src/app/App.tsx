import { ThemeProvider } from 'styled-components';
import { theme } from './config/styles';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div>
        app
      </div>
    </ThemeProvider>
  )
}

export default App
