import { useMemo, useState } from "react";
import "./admin.css";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../../components/common/BookCard";
import { useNavigate } from "react-router-dom";
import { selectedBook, selectedBookIndex } from "../../redux/BookSlice";
import Addbook from "../../components/pages/home/Addbook";
export default function Admin() {
  let navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState("");
  const [isAddTabVisible, setisAddTabVisible] = useState(false);
  const TotalBooklist = useSelector((state) => state.bookSlice.bookList);
  const dispatch = useDispatch();
  const searchedList = useMemo(() => {
    return TotalBooklist.filter((elm) => {
      if (
        elm.title.toLowerCase().includes(inputSearch) ||
        String(elm.ISBN).includes(inputSearch)
      ) {
        return elm;
      }
    });
  }, [inputSearch]);
  const handleSelect = (elm, index) => {
    console.log("tyui");
    dispatch(selectedBook(elm));
    dispatch(selectedBookIndex(index));
    navigate(`/bookdetails/${elm.ISBN}`);
  };
  return (
    <div>
      <div className="SearchBox">
        <label htmlFor="">Search Books :</label>
        <span className="inputSearch">
          <input
            className="SearchBook"
            type="text"
            name=""
            id=""
            placeholder="Enter book title or ISBN"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
        </span>
        <div>
          <button onClick={() => setisAddTabVisible(true)} className="buttons">
            Add Book
          </button>
        </div>
      </div>
      <div>
        <div>
          {searchedList.length !== 0 ? "Sample booklist" : "Searched results"}
        </div>
        <div className="bookListRoot">
          {searchedList.length === 0
            ? TotalBooklist.slice(0, 10).map((elm, index) => (
                <BookCard
                  key={elm.title}
                  info={elm}
                  onClick={() => {
                    handleSelect(elm, index);
                  }}
                />
              ))
            : searchedList.map((elm, index) => (
                <BookCard
                  key={elm.title}
                  info={elm}
                  onClick={() => {
                    handleSelect(elm, index);
                  }}
                />
              ))}
        </div>
      </div>
      <div className="AddBook">
        {isAddTabVisible && <Addbook setisAddTabVisible={setisAddTabVisible} />}
      </div>
    </div>
  );
}
