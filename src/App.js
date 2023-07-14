import logo from './logo.svg';
import './App.css';
// Components
import NavBar from './components/Navbar';
import Allusers from './components/AllUsers';
//import CodeforInterview from './components/CodeforInterview';
import Adduser from './components/AddUser';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Edituser from './components/Edit';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    {/* <Route path='/' element={<CodeforInterview />} /> */}
      <Route path='/' element={<Allusers />} />
      <Route path='/add' element={<Adduser />} />
      <Route path='/edit/:id' element={<Edituser/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
