import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import User from './component/User';
import Admin from './component/Admin';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/user' element={<User/>} />
      <Route path='/admin' element={<Admin/>} />


    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
