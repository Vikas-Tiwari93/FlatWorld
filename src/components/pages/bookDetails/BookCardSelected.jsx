import React from "react";
import "./bookcardselected.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeNavigation } from "../../../redux/navSlice";
import { removeBook } from "../../../redux/BookSlice";
export default function BookCardSelected({ bookInfo }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  let navigate = useNavigate();
  let keysArry = Object.keys(bookInfo);
  const bookIndex = useSelector((state) => state.bookSlice.index);

  return (
    <>
      <div className="bookCardRoot">
        {keysArry.map((elm) => {
          return (
            <div className="selectedCardDetails" key={elm}>
              <span>{elm} :</span>
              <span>{bookInfo[elm]}</span>
            </div>
          );
        })}
        <div>
          <button
            className="buttons"
            onClick={() => {
              dispatch(changeNavigation(1));
              navigate(`/manage/${id}`);
            }}
          >
            Update Book Details
          </button>
          <button
            className="buttons"
            onClick={() => {
              dispatch(removeBook(bookIndex));
              navigate(`/admin`);
            }}
          >
            Delete Book
          </button>
        </div>
      </div>
    </>
  );
}
