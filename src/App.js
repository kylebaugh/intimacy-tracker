import './cssFiles/App.css';
import {Routes, Route } from 'react-router-dom';

import Home from './components/home'
import Login from './components/login'
import Register from './components/register'
// import Profile from './components/profile'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          {/* <Route path='/profile' element={}/> */}
        </Routes>
    </div>
  );
}

export default App;
