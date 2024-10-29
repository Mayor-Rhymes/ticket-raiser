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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/create-ticket",
        element: <CreateTicket />
      },
      {
        path: "/ticket-analytics",
        element: <TicketAnalytics />
      },
      {
        path: "/explore",
        element: <Explore />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
