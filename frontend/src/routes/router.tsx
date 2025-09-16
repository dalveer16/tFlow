import Login from "@/app/auth/Login";
import Dashboard from "@/app/dashboard/Dashboard";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import Layout from "@/components/layout/Layout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout children={undefined} />,
        children: [{ path: "/", element: <Dashboard /> }],
      },
    ],
  },
]);
