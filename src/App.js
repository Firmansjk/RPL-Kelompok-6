import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/loginpage';
import RegisterPage from './pages/registerpage';
import ProfilePage from './pages/profile';
import MenuPage from './pages/menupage';
import LupaPassPage from './pages/lupaPass';
import ResetPassPage from './pages/resetpass';


function App() {
  return (
      <Router>
        <Routes>
            <Route exact path='/' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage/>} />
            <Route path='/resetpassword' element={<LupaPassPage/>}/>
            <Route path='/resetpw' element={<ResetPassPage/>}/>

            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/menu' element={<MenuPage/>}/>
        </Routes>
      </Router>
  );
}
  
export default App;