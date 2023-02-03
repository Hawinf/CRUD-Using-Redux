import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import {Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ProtectedRoute } from './hoc/ProtectedRoute';
import { DiscoveryPage } from './pages/Discovery';
import { CarList } from './pages/CarList';
import { CarDetail } from './pages/CarDetail';
import { AddNewCar } from './pages/AddNewCar';

function App() {
  return (
    <Routes>
        <Route element={<ProtectedRoute />}>
            <Route path='/discovery' element={<DiscoveryPage />} />
            <Route path='/car-list' element={<CarList />} />
            <Route path='/detail-car/:id' element={<CarDetail />} />
            <Route path='/adding-new-car' element={<AddNewCar />} />
        </Route>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
    </Routes>
  );
}

export default App;
