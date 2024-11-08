import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.tsx";
import Home from "./routes/Home.tsx";
import CreateTicket from "./routes/CreateTicket.tsx";
import TicketAnalytics from "./routes/TicketAnalytics.tsx";
import Login from "./routes/Login.tsx";
import Signup from "./routes/Signup.tsx";
import Explore from "./routes/Explore.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import UserProfile from "./routes/UserProfile.tsx";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },

      {
        path: "/create-ticket",
        element: (
          <ProtectedRoute>
            <CreateTicket />
          </ProtectedRoute>
        ),
      },
      {
        path: "/ticket-analytics",
        element: (
          <ProtectedRoute>
            <TicketAnalytics />
          </ProtectedRoute>
        ),
      },
      {
        path: "/explore",
        element: (
          <ProtectedRoute>
            <Explore />
          </ProtectedRoute>
        ),
      },
      {
        path: "/userprofile",
        element: (
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

const client = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          classNames: {
            error: "bg-red-400",
            success: "text-green-400",
            warning: "text-yellow-400",
            info: "bg-blue-400",
          },
        }}
      />
    </QueryClientProvider>
  </StrictMode>
);
