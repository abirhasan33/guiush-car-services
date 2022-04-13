import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Checkout from './pages/Checkout/Checkout';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register/Register';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import NotFound from './pages/NotFound/NotFound';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Heder from './pages/Shared/Heder/Heder';


function App() {
  return (
    <div>
        <Heder></Heder>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
