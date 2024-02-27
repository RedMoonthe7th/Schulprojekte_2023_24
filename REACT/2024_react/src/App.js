import './index.css';
import {
  createBrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import FootballHeaderNav from './components/Football-API/FootballHeaderNav';
import FootballClubs from './components/Football-API/FootballClubs';
import FootballTable from './components/Football-API/FootballTable';

function App() {
  return (
    <div className='bg-[#2B3434]'>
      <Router>
      <div className='shadow'><FootballHeaderNav /></div>

       
        <Routes>
          <Route path='/' element={<div>Placeholder</div>}/>
          <Route path='/Gameplan' element={<div>Placeholder</div>}/>
          <Route path="/Table" element={<FootballTable/>}/>
          <Route path="/Clubs" element={<FootballClubs/>}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
