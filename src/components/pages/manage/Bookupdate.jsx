import React from "react";
import { useDispatch } from "react-redux";
import { editBook } from "../../../redux/bookSlice";
import { useNavigate } from "react-router-dom";
import "./update.css";

export default function Bookupdate({ bookObj, setBookValues }) {
  let keysArry = Object.keys(bookObj);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      Edit
      <div className="Updatebook">
        {keysArry.map((elm) => {
          return (
            <div className="updatedCardDetails" key={elm}>
              <span>{elm} :</span>
              <span>
                <input
                  type="text"
                  name={elm}
                  value={bookObj[elm]}
                  onChange={(e) => setBookValues(e)}
                />
              </span>
            </div>
          );
        })}
      </div>
      <button
        className="buttons"
        onClick={() => {
          dispatch(editBook(bookObj));
          navigate("/admin");
        }}
      >
        Update in Book Shelf
      </button>
    </div>
  );
}
