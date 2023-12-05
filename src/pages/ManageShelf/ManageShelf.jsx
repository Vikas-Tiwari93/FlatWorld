import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bookupdate from "../../components/pages/manage/Bookupdate";
import { useNavigate } from "react-router-dom";

export default function ManageShelf() {
  const selectedBook = useSelector((state) => state.bookSlice.selectedBook);
  const bookIndex = useSelector((state) => state.bookSlice.index);

  const [bookValues, setBookValues] = useState(selectedBook);
  const handleObbokValueChange = (e) => {
    const { name, value } = e.target;
    let newObj = { ...bookValues };
    newObj[name] = value;
    setBookValues(newObj);
  };
  return (
    <div>
      <Bookupdate
        bookObj={bookValues}
        setBookValues={handleObbokValueChange}
        bookIndex={bookIndex}
      />
    </div>
  );
}
