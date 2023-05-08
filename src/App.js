import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchCateringPage from "./pages/searchCatering" 
import ProfileCateringPage from './pages/profileCatering';
import SettingProfilePage from './pages/settingProfile';
import HomePage from './pages/homePage';
import SearchMenuPage from './pages/searchMenu';
import LoginPage from './pages/loginpage';
import RegisterPage from './pages/registerpage';
import ResetPassPage from './pages/resetpass';
import LupaPassPage from './pages/lupaPass';
import HubungiPenjual from './pages/hubungipenjual';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/loginpage' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/forgetpassword' element={<LupaPassPage />} />
          <Route path='/resetpassword' element={<ResetPassPage />} />

          <Route exact path='/' element={<HomePage/>} />
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
