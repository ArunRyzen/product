import Login from "./Page/Login";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Product from "./Page/Product"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Product" element={<Product/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
