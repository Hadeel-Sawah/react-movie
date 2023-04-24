
import './App.css';
import { Routes , Route, useNavigate,Navigate} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Movies from './components/Movies/Movies';
import Navbar from './components/Navbar/Navbar';
import TvShow from './components/TvShow/TvShow';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import Notfound from './components/Notfound/Notfound';
import People from './components/People/People';
import Detials from './components/Details/Details';
import { useState , useEffect} from 'react';
import jwtDecode from 'jwt-decode';
import { Children } from 'react';
function App() {
  const[userData,setUserData] = useState(null);
  let navigate = useNavigate();
  //function infoUser
  function saveUserData() {
    let encodedToken = localStorage.getItem('userToken');
    let decodedToken =jwtDecode(encodedToken);
    setUserData(decodedToken);
    // console.log(decodedToken);
  }

  // use effect to handle refresh
  useEffect(() => {
     if(localStorage.getItem('userToken')!= null){
      saveUserData();
     }
  }, []);
    // logout function
    function logout() {
      localStorage.removeItem('userToken');
      setUserData(null);
      navigate('./login')
     } 
  //prodectRoute function
  function ProtectedRoute(props) {
   if (localStorage.getItem('userToken') == null) {
    return <Navigate to='/login'/>
   }
   else{
    return props.children;
   }
  }
  
  return (
    <>
     <Navbar userData={userData} logout={logout}/>
     <div className="container">
       <Routes>
        <Route path='*' element={ <Notfound/>}></Route>
         <Route path='/' element={<ProtectedRoute> <Home/> </ProtectedRoute> }></Route>
         <Route path='home' element={<ProtectedRoute> <Home/> </ProtectedRoute>}></Route>
         <Route path='movies' element={<ProtectedRoute> <Movies/> </ProtectedRoute>}></Route>
         <Route path='tvshow' element={<ProtectedRoute> <TvShow/>  </ProtectedRoute>}></Route>
         <Route path='people' element={ <ProtectedRoute> <People/> </ProtectedRoute>}></Route>
         <Route path='about' element={ <About/> }></Route>
         <Route path='login' element={<Login saveUserData = {saveUserData}/>}></Route>
         <Route path='logout' element={<Logout/>}></Route>
         <Route path='register' element={ <Register/>}></Route>
         <Route path='details' element={<Detials/> }></Route>
       </Routes>
     </div>
    </>
    
   );

}

export default App;
