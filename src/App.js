import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sildebar/Sidebar';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import OrderMain from './components/OrderMain/OrderMain';
import Customer from './components/Customer/Customer';
import Product from './components/ProductMain/Product';
import AnalysisMain from './components/AnalysisMain/AnalysisMain';

function App() {
  return (

    <BrowserRouter>
    <div className="App">
        <div className='AppGlass'>
          <Sidebar/>
 
            <Routes>
              <Route path="/" element={<MainDash />}/>
              <Route path="/orderMain" element={<OrderMain />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/product" element={<Product />} />
              <Route path="/analysis" element={<AnalysisMain />} />
              
            </Routes>
          
          <RightSide/>

          
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
