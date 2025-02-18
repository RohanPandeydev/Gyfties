

import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'react-toastify/dist/ReactToastify.css';
import UserData from './components/Context/UserContext.jsx'
import { BrowserRouter } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ToastContainer } from 'react-toastify'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
        <ToastContainer/>
      <UserData>
        <App />
      </UserData>
    </BrowserRouter>
  {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  </QueryClientProvider>,
)
