import React, { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { changeNavigation } from "../../../redux/navSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar({ navigationRoutes }) {
  const navIndex = useSelector((state) => state.navSlice.navigationIndex);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handlekRoutes = (index, elm) => {
    dispatch(changeNavigation(navIndex));
    navigate(elm.navigateTo);
  };
  return (
    <div className="Navroot">
      <div>Flatworld</div>
      <div className="Routes">
        {navigationRoutes.map((elm, index) => {
          return (
            <span
              key={elm.name}
              name={elm.name}
              className={navIndex === index ? "selected" : ""}
              onClick={() => handlekRoutes(index, elm)}
            >
              {elm.title}
            </span>
          );
        })}
      </div>
      <div>admin</div>
    </div>
  );
}
