import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import ProductDetails from "./components/ProductDetails";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="/product/:productId" exact element={<ProductDetails />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
