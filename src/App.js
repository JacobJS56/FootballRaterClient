import Home from './containers/Home/HomePageBuilder';
import Leagues from './containers/LeaguesPages/AllLeaguesPage'
import Players from './containers/PlayerPages/AllPlayersPage'
import Teams from './containers/TeamsPages/AllTeamsPage'
import FourOFour from './containers/Page404'


import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/Leagues" element={<Leagues />}></Route>
        <Route path="/Teams" element={<Teams />}></Route>
        <Route path="/Players" element={<Players />}></Route>
        <Route path="/404" element={<FourOFour />} />
      </Routes>
    </HashRouter>

    
  );
}

export default App;
