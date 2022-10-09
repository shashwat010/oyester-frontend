import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AddNote from './components/AddNote'

function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
        <Route exact path='/tasks' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/addnote' element={<AddNote />} />
        <Route path='*' element={<Signup />} />
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
