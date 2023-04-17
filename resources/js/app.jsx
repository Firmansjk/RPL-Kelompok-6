import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


import DashboardVendor from './Pages/toko/dashboard';
import ProfilePage from './Pages/toko/profile';
import MenuPage from './Pages/toko/menupage';


function App() {
  return (
      <Routes basename='/vendor'>
            <Route path='/vendor/dashboard' element={<DashboardVendor/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/menu' element={<MenuPage/>}/>
      </Routes>
  );
}
  
export default App;

if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
            , document.getElementById('app'));
}

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
