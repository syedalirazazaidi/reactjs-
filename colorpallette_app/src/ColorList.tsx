import React from "react";
import { useState } from "react";

export default function ColorList() {
  const colors = [
    { hex: "#FF0000", rgba: "rgba(255, 0, 0, 1)" },
    { hex: "#00FF00", rgba: "rgba(0, 255, 0, 1)" },
    { hex: "#0000FF", rgba: "rgba(0, 0, 255, 1)" },
    { hex: "#FFFF00", rgba: "rgba(255, 255, 0, 1)" },
    { hex: "#FF00FF", rgba: "rgba(255, 0, 255, 1)" },
    { hex: "#00FFFF", rgba: "rgba(0, 255, 255, 1)" },
    { hex: "#FFA500", rgba: "rgba(255, 165, 0, 1)" },
    { hex: "#800080", rgba: "rgba(128, 0, 128, 1)" },
    { hex: "#008080", rgba: "rgba(0, 128, 128, 1)" },
    { hex: "#800000", rgba: "rgba(128, 0, 0, 1)" },
  ];
  const [renderColor, setrenderColor] = useState(colors);
  const [selectedColor, setSelectedColor] = useState("gray");
  const [toTrue, settrue] = useState(false);
  const [colorCopy, setColorCopied] = useState("");
  const handleColorClick = (color: string) => {
    // setSelectedColor(color);
    document.body.style.backgroundColor = color;
    settrue(false);
  };
  const copyColor = (color: string) => {
    setColorCopied(color);
    settrue(true);
    navigator.clipboard
      .writeText(color)
      .then(() => {
        console.log("Color copied to clipboard:", color);
      })
      .catch((error) => {
        console.error("Error copying color to clipboard:", error);
      });
  };
  return (
    <>
      {" "}
      <div style={{ marginBottom: "180px", color: "#ffff" }}>
        {" "}
        {toTrue ? `Copied Color ${colorCopy}` : ""}
      </div>
      <div>
        <div className="color-grid">
          {renderColor.map((color, index) => {
            return (
              <div>
                <div
                  key={index}
                  onClick={() => handleColorClick(color.hex)}
                  className="color-item"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <div
                  style={{
                    fontSize: "12px",
                    lineHeight: "4px",
                  }}
                >
                  <p
                    style={{ cursor: "pointer", color: "#fff" }}
                    onClick={() => copyColor(color.hex)}
                  >
                    {" "}
                    {color.hex}
                  </p>
                  <br />
                  <p
                    style={{ cursor: "pointer", color: "#fff" }}
                    onClick={() => copyColor(color.rgba)}
                  >
                    {" "}
                    {color.rgba}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
