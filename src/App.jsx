import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import Home from "./pages/Home/Home"
import Layout from "./components/Layout/Layout"
import { Toaster } from "react-hot-toast"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import GuestRoute from "./components/GuestRoute/GuestRoute"
import UserProvider from "./context/User.context"
import ProductDetails from "./pages/ProductDetails/ProductDetails"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute>
        <Layout />
      </ProtectedRoute>,
      children: [
        { index: true, element: <Home /> },
        { path: "product/:id", element: <ProductDetails /> },
      ]
    },
    {
      path: "/",
      element: <GuestRoute>
        <Layout />
      </GuestRoute>,
      children: [
        { path: "signup", element: <Signup /> },
        { path: "login", element: <Login /> }
      ]
    }
  ])


  return (
    <>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
      <Toaster />
    </>
  )
}

export default App


/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> }
    ]
  },
])
 */