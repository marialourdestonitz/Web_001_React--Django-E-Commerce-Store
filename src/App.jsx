import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./views/auth/Login"

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (

    <RouterProvider router={router} />

  )
}

export default App