import TopBar from './components/bars/TopBar';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import ToDosPage from './pages/ToDosPage';

function App() {
  return ( 
    <div className="app">
      <TopBar/>
      <Routes>
        <Route path = "first-react-project/" element = {<Home/>}/>
        <Route path = "first-react-project/about" element = {<About/>}/>
        <Route path = "first-react-project/to-do" element = {<ToDosPage/>}/>
        <Route path = "*" element = {<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
