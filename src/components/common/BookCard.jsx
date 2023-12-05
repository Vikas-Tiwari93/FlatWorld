import "./bookcard.css";
export default function BookCard({ info, onClick }) {
  let keysArry = Object.keys(info);

  return (
    <div className="bookCard" onClick={onClick}>
      {keysArry.map((elm) => {
        return (
          <div className="cardRows" key={elm}>
            <span>{elm} :</span>
            <span className="info">{info[elm]}</span>
          </div>
        );
      })}
    </div>
  );
}
