import { useSelector } from "react-redux";
import BookCardSelected from "../../components/pages/bookDetails/BookCardSelected";

export default function BookDetails() {
  const selectedBook = useSelector((state) => state.bookSlice.selectedBook);
  return (
    <div>
      <BookCardSelected bookInfo={selectedBook} />
    </div>
  );
}
