import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState("home");
  const [categoryId, setCategoryId] = useState("");
  return (
    <>
      <h1>{categoryId}</h1>
      <Header
        filter={filter}
        setFilter={setFilter}
        categoryId={categoryId}
        setCategoryId={setCategoryId}
      />
      <div className="overflow-clip w-[95%] mx-auto">
        <Outlet context={{ categoryId }} />
      </div>
    </>
  );
}

export default App;
