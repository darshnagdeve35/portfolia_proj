// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import TodoList from "./Pages/TodoList";
import Calculator from "./Pages/Calculator";
import EmojiSearch from "./Pages/EmojiSearch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/TodoList" element={<TodoList />} />
      <Route path="/Calculator" element={<Calculator />} />
      <Route path="/EmojiSearch" element={<EmojiSearch />} />
    </Routes>
  );
}

export default App;
