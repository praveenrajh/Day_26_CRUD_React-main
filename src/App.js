import './App.css';
import DrawerAppBar from './components/navbar';
import CreateUser from './components/form';
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users  from './components/users'
import Userdetails  from './components/userdetail'
import About from  './components/about'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer theme='dark'/>
         < DrawerAppBar/>
         <Routes>
        
          <Route path="/" element={<Users />} />
          <Route path="/Userdetails/:id" element={<Userdetails />} />
          <Route path="/CreateUser" element={ <CreateUser />} />
          <Route path="/CreateUser/:id" element={ <CreateUser />} />
          <Route path="/About" element={<About />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
