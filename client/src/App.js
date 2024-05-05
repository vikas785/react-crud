import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddUser from './Component/AddUser';
import Dashboard from './Component/Dashboard';
import UpdateUser from './Component/UpdateUser';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div >
      <div className='col-8 offset-2 '>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<AddUser />} />
            <Route path="/update/:userId" element={<UpdateUser />} />
          </Routes>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
