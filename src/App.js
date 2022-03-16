import { Route, Routes, Redirect } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import "./app.css";
import Home from "./components/home/Home";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="app">
      {/* <Header />
      <Products /> */}

      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
