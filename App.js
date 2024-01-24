import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import Signup from "./components/Signup";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import Productlist from "./components/Productlist";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/' element= {<Productlist/>}  />
        <Route path='/add' element={<AddProduct/>}  />
        <Route path='/update' element= {<h1>This is my update page</h1>}  />
        <Route path='/logout' element= {<h1>This is my logout page</h1>}  />
        <Route path='/profile' element= {<h1>This is my profile page</h1>}  />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path='/signup' element= {<Signup/>}  />
       
       

      </Routes>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
