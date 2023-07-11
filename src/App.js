import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/about" element={<About />} />
        <Route path="/movie-detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onClick = () => {
    setTodos([text, ...todos]);
    setText("");
  };
  const onDelete = (item, index) => {
    const filterTodos = [...todos];
    const newFilterTodos = filterTodos.filter((it) => it !== item);
    setTodos(newFilterTodos);
  };
  return (
    <>
      <h1>To Do List</h1>
      <input type="text" value={text} onChange={onChange} />
      <input type="submit" value="Do it" onClick={onClick} />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <input
              type="button"
              value="삭제"
              onClick={() => onDelete(item, index)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
