import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import App from './App.jsx'
import Root from "@aliasapp/routes/root";
import Contact from '@aliasapp/routes/contact.jsx';
import ErrorPage from '@aliasapp/error-page.jsx';
import './index.css'

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // element: <div>Hello world!</div>,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {/* <App /> */}
    </QueryClientProvider>
  </React.StrictMode>,
)
