import React, { useState } from "react";
import { v4 as uuid } from "uuid";

interface InputFieldProps {
  label: string;
}

function Addtodo({ label }: InputFieldProps) {
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);
  const [inputValue, setInputValue] = useState("");
  const [isEdit, isSetEdit] = useState(0);
  const [alltodos, setTodos] = useState<any>([]);

  const addTodonew = (e: any) => {
    e.preventDefault();
    if (isEdit === 0) {
      setTodos((prev: any) => {
        return [
          ...prev,
          {
            inputValue: inputValue,
            id: small_id,
          },
        ];
      });
    } else {
      const updatedTodos = alltodos.map((todo: any) =>
        todo.id === isEdit ? { ...todo, inputValue: inputValue } : todo
      );
      isSetEdit(0);
      setTodos(updatedTodos);
    }

    setInputValue("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const deleteTodo = (index: number) => {
    setTodos((prevTodos: any) =>
      prevTodos.filter((todo: any) => todo.id !== index)
    );
  };

  const editTodo = (todo: any) => {
    setInputValue(todo.inputValue);
    isSetEdit(todo.id);
    // setTodos((prev: any) => [
    //   {
    //     ...prev,
    //     inputValue,
    //     [todo.id]: todo,
    //   },
    // ]);
  };

  return (
    <>
      <form onSubmit={addTodonew}>
        <label htmlFor="inputField">{label}</label>
        <input
          type="text"
          id="inputField"
          value={inputValue}
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "none",
          }}
          onChange={handleInputChange}
          placeholder="Add Todos..."
          required
        />

        <button
          type="submit"
          style={{
            padding: "6px 6px 7px 6px ",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "ThreeDLightShadow",
            color: "#fff",
            opacity: 0.6,
            marginLeft: "20px",
          }}
        >
          Add Todo
        </button>
      </form>
      <div style={{ position: "fixed" }}>
        {alltodos.map((todo: any, index: any) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: "60px",
            }}
          >
            <div style={{ margin: "6px" }} key={todo.id}>
              {todo.inputValue}
            </div>
            <div
              onClick={() => deleteTodo(todo.id)}
              style={{ cursor: "pointer" }}
            >
              ❌
            </div>
            <div style={{ cursor: "pointer" }} onClick={() => editTodo(todo)}>
              ✔
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Addtodo;
