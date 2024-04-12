import { createBrowserRouter } from "react-router-dom";
import './App.css';
import Example from "./components/starter";
import ErrorPage from "./components/404";
import Contact from "./pages/Contact";




export const router = createBrowserRouter([
  {    path: "/",    element: <Example/>,  },
  {    path: "/fibre",    element: <Example/>,  },
  {    path: "/gallery",    element: <Example/>,  },
  {    path: "/contact",    element: <Contact/>,  },
  {    path: "*",    element: <ErrorPage/>,  },
]);

