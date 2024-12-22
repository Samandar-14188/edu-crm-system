import {RouterProvider, createBrowserRouter} from "react-router-dom" ;
import Home from './page/home/index'
import Login from "./page/auth";
export default function App() {
  const routes = createBrowserRouter([
    {
      path:"/home",
      element: <Home />
    },
    {
      path:"/",
      element: <Login />
    }
  ])
  return (
    <RouterProvider router={routes} />
  )
}
