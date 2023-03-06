import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./routes/authentication/Login";
import Signup from "./routes/authentication/Signup";
import Home from "./routes/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
