import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from '../src/pages/vendorpage/loginpage';
import RegisterPage from '../src/pages/vendorpage/registerpage';
import ProfilePage from '../src/pages/vendorpage/profile';
import MenuPage from '../src/pages/vendorpage/menupage';
import LupaPassPage from '../src/pages/vendorpage/lupaPass';
import ResetPassPage from '../src/pages/vendorpage/resetpass';
import HomePage from '../src/pages/userpage/homePage';
import SearchCateringPage from "../src/pages/userpage/searchCatering" 
import ProfileCateringPage from '../src/pages/userpage/profileCatering';
import SettingProfilePage from '../src/pages/userpage/settingProfile';
import SearchMenuPage from '../src/pages/userpage/searchMenu';
import LoginPageUser from '../src/pages/userpage/loginpage';
import RegisterPageUser from '../src/pages/userpage/registerpage';
import ResetPassPageUser from '../src/pages/userpage/resetpass';
import LupaPassPageUser from '../src/pages/userpage/lupaPass';
import HubungiPenjual from '../src/pages/userpage/hubungipenjual';


function App() {
  return (
      <Router>
        <Routes>
            {/* ROUTES FOR VENDOR PAGE */}
            <Route path='/loginpagecatering' element={<LoginPage />} />
            <Route path='/registerpagecatering' element={<RegisterPage/>} />
            <Route path='/resetpasswordcatering' element={<LupaPassPage/>}/>
            <Route path='/resetpwcatering' element={<ResetPassPage/>}/>

            <Route path='/profilecatering' element={<ProfilePage/>}/>
            <Route path='/menucatering' element={<MenuPage/>}/>

            {/* ROUTES FOR USER PAGE */}
            <Route path='/loginpage' element={<LoginPageUser />} />
            <Route path='/register' element={<RegisterPageUser />} />
            <Route path='/forgetpassword' element={<LupaPassPageUser />} />
            <Route path='/resetpassword' element={<ResetPassPageUser />} />

            <Route exact path='/' element={<HomePage />}/>
            <Route path='/searchCatering' element={<SearchCateringPage />} />
            <Route path='/hubungipenjual' element={<HubungiPenjual />} />
            <Route path='/searchMenu' element={<SearchMenuPage/>} />
            <Route path='/profile' element={<ProfileCateringPage/>}/>
            <Route path='/userprofilesettings' element={<SettingProfilePage/>}/>
        </Routes>
      </Router>
  );
}
  
export default App;