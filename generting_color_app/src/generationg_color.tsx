import React, { useState, useEffect } from "react";

const GenerationgColor = () => {
  const [colors, setColors] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      generateNextColor();
    }, 1000); // Interval duration: 1 second

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, []);

  const generateNextColor = () => {
    setColors((prevColors) => {
      if (prevColors.length === 0) {
        return generateAllColors();
      } else if (currentIndex < prevColors.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setCurrentIndex(0);
      }
      return prevColors;
    });
  };

  const generateAllColors = () => {
    const allColors = [];

    for (let r = 0; r <= 255; r += 51) {
      for (let g = 0; g <= 255; g += 51) {
        for (let b = 0; b <= 255; b += 51) {
          const color = `rgb(${r}, ${g}, ${b})`;
          allColors.push(color);
        }
      }
    }

    return allColors;
  };

  return (
    <div className="color-grid">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`color-cell ${index === currentIndex ? "active" : ""}`}
          style={{
            backgroundColor: color,
            width: "10%",
            paddingTop: "10%",
            display: "inline-block",
          }}
        >
          {index}
        </div>
      ))}
    </div>
  );
};

export default GenerationgColor;
