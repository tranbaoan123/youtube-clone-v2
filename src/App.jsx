import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";

function App() {
  // Làm sao trích được dữ liệu

  return (
    <>
      <Header />
      <div className="overflow-clip w-[95%] mx-auto">
        <Outlet />
      </div>
    </>
  );
}

export default App;
