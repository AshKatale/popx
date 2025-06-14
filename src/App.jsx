import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Index from './pages/Index';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Account from './pages/Account';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
  )
}

export default App
