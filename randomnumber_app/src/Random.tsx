import React, { useState } from "react";

export default function Random() {
  const [numb, setNumber] = useState({
    min: 0,
    max: 10,
  });
  const [rannumb, setRanNumb] = useState();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNumber({ ...numb, [name]: value });
  };
  const generateNumber = () => {
    const newb: any =
      Math.floor(Math.random() * (numb.max - numb.min + 1)) + numb.min;
    setRanNumb(newb);
    setNumber((prev) => {
      return { ...prev, min: 0, max: 10 };
    });
  };
  return (
    <div
      style={{
        backgroundColor: "#c6c3b8",
        width: "600px",
        height: "250px",
        padding: "10px",
      }}
    >
      <div>
        <div
          style={{
            marginTop: "140px",
            backgroundColor: "#3d3721",
            width: "500px",
            margin: "0 auto",
            height: "50px",
          }}
        >
          <p
            style={{
              color: "#ffff",
              textAlign: "left",
              padding: "12px 0px 0px 10px",
              borderRadius: "5px",
            }}
          >
            Random Number:{rannumb ?? 0}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "10px",
            marginTop: "40px",
          }}
        >
          <div style={{ lineHeight: "0px" }}>
            <p style={{ textAlign: "left" }}>Min</p>
            <input
              type="number"
              style={{ border: "none" }}
              min="0"
              value={numb.min}
              name="min"
              onChange={handleChange}
            />
          </div>
          <div style={{ lineHeight: "0px" }}>
            <p style={{ textAlign: "left" }}>Max</p>
            <input
              type="number"
              name="max"
              style={{ border: "none" }}
              value={numb.max}
              max="10"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <button onClick={generateNumber}>Generate Random Number</button>
      </div>
    </div>
  );
}
