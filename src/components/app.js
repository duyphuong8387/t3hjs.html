import { Route, Routes } from "react-router-dom";
import Header from "./components/layouts/header";
import Menu from "./components/layouts/menu";
import Home from "./components/pages/Home";
import Category from "./components/pages/Category";
import Product from "./components/pages/Product";

function App() { // jsx
  
  return (
      <div className="app">
        <Header />
        <Menu/>
        <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/category" element={<Category/>}/>
                <Route path="/product" element={<Product/>}/>
            </Routes>
           
        </main>
      </div>
  );
}

export default App;