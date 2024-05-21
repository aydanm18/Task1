import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ROUTES } from "./router";
import { BasketContextProvider } from './context/basketContext';
function App() {
  const router = createBrowserRouter(ROUTES)
  return (
    <BasketContextProvider>
     <RouterProvider router={router} /> 
    </BasketContextProvider>
  )
}

export default App
