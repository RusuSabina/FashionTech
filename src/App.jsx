import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Routes from './routes'
import { theme } from './theme'
import { CartContextProvider } from './contexts/cart/CartContextProvider'

const queryClient = new QueryClient()

function App() {
  return (
    <CartContextProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <Routes />
        </QueryClientProvider>
      </ThemeProvider>
    </CartContextProvider>
  )
}

export default App
