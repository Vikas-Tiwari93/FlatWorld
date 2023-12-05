import React from "react";
import { Navigate, Outlet, useNavigation } from "react-router-dom";
import "./home.css";
import Navbar from "../../components/pages/home/Navbar";
export default function Home() {
  const { path } = useNavigation;

  const navigationRoutes = [
    { title: "Admin", navigateTo: "/admin", name: "admin" },
    { title: "Manage", navigateTo: "/manage", name: "manage" },
    { title: "Qr search", navigateTo: "/qrSearch", name: "qr" },
  ];
  return (
    <div>
      <Navigate to="/admin" />
      <Navbar navigationRoutes={navigationRoutes} />
      <Outlet />
    </div>
  );
}
