import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import {Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ProtectedRoute } from './hoc/ProtectedRoute';
import { DiscoveryPage } from './pages/Discovery';
import { CarList } from './pages/CarList';

function App() {
  return (
    <Routes>
        <Route element={<ProtectedRoute />}>
            <Route path='/discovery' element={<DiscoveryPage />} />
            <Route path='/car-list' element={<CarList />} />
        </Route>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
    </Routes>
  );
}

export default App;
