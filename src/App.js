import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/home/single/Single";
import Write from "./pages/home/write/Write";
import Settings from "./pages/home/write/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  const user=true;
  return (
    <Router>
    <Topbar />
    <Routes>
    <Route path='/' element={<Home />}/> 
     <Route path='/register' element={user ? <Home/>:<Register />}/>  
     <Route path='/login' element={user ? <Home/>:<Login />}/> 
     <Route path='/write' element={user ? <Write />:<Login/>}/> 
     <Route path='/settings' element={user ? <Settings />:<Login/>}/> 
     <Route path='/post/:postid' element={<Single />}/> 
    </Routes>
    </Router>
  );
}

export default App;
