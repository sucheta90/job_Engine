import "./App.css";
import { Outlet } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
import NavHeader from "./components/Navigation/Navbar";
function App() {
  return (
    <>
      <div className="main_container">
        <NavHeader />
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
