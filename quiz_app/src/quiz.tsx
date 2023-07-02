import { useState } from "react";
import questions from "./question";

export default function Quiz() {
  const data = questions;
  const [allquestion, setQuestion] = useState(data);
  const [indexno, setIndex] = useState(0);
  const [answer, setAnswer] = useState();
  const [wronganswer, setWrongAnswer] = useState();
  const [btnClick, setBtnClick] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answerCorrect, setAnswerCorrect] = useState(false);

  const [color, setColor] = useState({
    correct: "",
    wrong: "",
  });

  const [count, setCount] = useState(0);
  const nextButton = () => {
    if (indexno < allquestion.length - 1) {
      setIndex((prev) => prev + 1);
      setAnswerCorrect(false);
    }
  };
  const restartButton = () => {
    setAnswerCorrect(false);
    setIndex(0);
  };
  const answerHandle = (option: any, index: any) => {
    const isCorrect = option.isCorrect;

    if (isCorrect) {
      setCount((prev) => prev + 1);
      setBtnClick(true);
      setAnswerCorrect(isCorrect);
      setColor((prev) => {
        return {
          ...prev,
          correct: "green",
        };
      });
    } else if (!isCorrect) {
      setAnswerCorrect(!isCorrect);
      if (allquestion[indexno].options[index].id === index) {
        setColor((prev) => {
          return {
            ...prev,
            wrong: "red",
          };
        });
      }
    }
  };

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // Adjust the number of columns as needed
    gap: "40px",
    marginTop: "60px",
  };

  return (
    <div>
      <h2>Quiz App</h2>
      <hr />
      <div></div>
      <h3>
        {indexno + 1}. {allquestion[indexno].text}
      </h3>
      <div style={gridContainerStyle}>
        {allquestion[indexno].options.map((option, index) => {
          return (
            <li style={{ listStyleType: "none" }} key={index + 1}>
              <button
                onClick={() => answerHandle(option, index)}
                style={{
                  backgroundColor:
                    answerCorrect && option.isCorrect
                      ? color.correct
                      : // eslint-disable-next-line no-constant-condition
                        "",
                }}
                disabled={answerCorrect}
              >
                <p style={{ padding: "-5px 5px", width: "140px" }}>
                  {option.text}
                </p>
              </button>
            </li>
          );
        })}
      </div>
      <div style={{ marginTop: "60px" }}>
        {indexno < allquestion.length - 1 ? (
          <button
            onClick={nextButton}
            style={{
              backgroundColor: "gray",
              padding: "6px 40px",
            }}
          >
            Next
          </button>
        ) : (
          <button
            onClick={restartButton}
            style={{
              backgroundColor: "gray",
              padding: "6px 40px",
            }}
          >
            Restart Quiz
          </button>
        )}
      </div>
      <p>Your Score : {count}</p>
    </div>
  );
}
