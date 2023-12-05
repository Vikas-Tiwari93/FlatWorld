import React, { useState } from "react";

export default function Addbook({ setisAddTabVisible }) {
  let bookBlm = { name: "", title: "" };
  const [bookValues, setBookValues] = useState(bookBlm);
  const keysArry = Object.keys(bookBlm);

  return (
    <div className="Updatebook">
      <div>
        {keysArry.map((elm) => {
          return (
            <div className="updatedCardDetails" key={elm}>
              <span>{elm} :</span>
              <span>
                <input
                  type="text"
                  name={elm}
                  value={bookValues[elm]}
                  onChange={(e) => setBookValues(e)}
                />
              </span>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          className="buttons"
          onClick={() => {
            setisAddTabVisible(false);
          }}
        >
          {" "}
          Add
        </button>
      </div>
    </div>
  );
}
