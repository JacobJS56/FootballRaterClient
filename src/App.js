import Home from './containers/HomePageBuilder.js';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/404" ></Route>
      </Routes>
    </Router>
  );
}

export default App;
