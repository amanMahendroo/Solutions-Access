import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './component/nav.js';
import Home from './component/home.js'
import About from './component/about.js'
import Founder from './component/founder.js'
import Service from './component/service.js'
import Searches from './component/searches.js'

export default function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route element={<Home />} path='/' exact="true" />
        <Route element={<About />} path='/about' />
        <Route element={<Founder />} path='/founder' />
        <Route element={<Service />} path='/service' /> 
        <Route element={<Searches />} path='searches' />
      </Routes>
    </BrowserRouter>
  );
}