import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

export default function Router() {
  return <RouterProvider router={routes} />;
}
