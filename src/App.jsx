import { Outlet } from "react-router-dom";
import "./App.css";
import NavItems from "./components/NavItems";
import Blog from "./blog/Blog";

function App() {
  return (
    <>
      <NavItems />
      <Outlet />
    </>
  );
}

export default App;
