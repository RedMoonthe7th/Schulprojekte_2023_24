import './index.css';
import PeopleContainer from './components/PeopleContainer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FootballMenu from './components/FootballMenu';

function App() {
  return (
    <div>
      <FootballMenu/>
    </div>
  );
}

export default App;
