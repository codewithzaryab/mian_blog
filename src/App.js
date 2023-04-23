
import './App.css';
import Topbar from './component/topbar/Topbar';
import Home from './pages/home/Home';
import Post from './component/post/Post'
import Single from './pages/single/Single'
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';


function App() {
  const user=true;
  return (
    
    <BrowserRouter>
    <Topbar/>
    <Routes>
   <Route path='/' element={<Home/>}> </Route>
        
    
   <Route path='/register' element={ user ? <Home/>:<Register/>}> </Route>
   <Route path='/login' element={user ? <Home/>:<Login/>}> </Route>
   <Route path='/settings' element={user ? <Settings/> : <Register/>}> </Route>
   <Route path='/write' element={user ? <Write/>:<Register/>}> </Route>
   <Route path='/post/;postid' element={<Single/>}> </Route>
        
    </Routes>
    
    </BrowserRouter>
  
 
   
  );
}

export default App;
