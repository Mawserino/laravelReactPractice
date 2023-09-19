import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login'
import Register from './Register'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import Protected from './Protected';
import ProductList from './ProductList';
import SearchProduct from './SearchProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/*<h1>Ecomm Project</h1>*/}
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Protected><ProductList /></Protected>}/>
          <Route path="/add" element={<Protected><AddProduct /></Protected>} />
          <Route path="/search" element={<Protected><SearchProduct /></Protected>} />
          <Route path="/update/:id" element={<Protected><UpdateProduct /></Protected>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
