
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop'
import Category from './pages/Category'
import Product from './pages/Product';
import Loginsignup from './pages/Loginsignup';
import Cart from './pages/Cart';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<Category category="mens"/>}/>
          <Route path='/womens' element={<Category category="womens"/>}/>
          <Route path='/kids' element={<Category category="kids"/>}/>
          <Route pat='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Loginsignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
