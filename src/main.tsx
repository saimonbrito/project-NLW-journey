import React from 'react'
import ReactDOM from 'react-dom/client'
import {Root} from "../src/router/root"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import {ComponentesPrincipal} from "../src/components/componentesPincipal"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/ComponentesPrincipal",
    element: <ComponentesPrincipal/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
