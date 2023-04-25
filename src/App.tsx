import TopBar from './components/bars/TopBar';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import ToDosPage from './pages/ToDosPage';
import CatFact from './components/CatFact';
import Parallax from './pages/Parallax';

function App() {
  return ( 
    <div className="app">
      <TopBar/>
      <CatFact/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/to-do" element = {<ToDosPage/>}/>
        <Route path = "/parallax" element = {<Parallax/>}/>
        <Route path = "*" element = {<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
