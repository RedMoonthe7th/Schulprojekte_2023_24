import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FootballMenu from './components/Football-API/FootballMenu';
import FootballHeaderNav from './components/Football-API/FootballHeaderNav';

function App() {
  return (
    <div>
      <FootballHeaderNav/>
      <FootballMenu/>
    </div>

  );
}

export default App;
