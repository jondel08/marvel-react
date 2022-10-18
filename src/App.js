import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Series from './pages/Series';
import Comics from './pages/Comic';
import Error404 from './pages/Error404';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/inicio" exact element={<Home/>} />
          <Route path="/series" exact  element={<Series/>} />
          <Route path="/comics" exact element={<Comics/>} />
          <Route element={<Error404/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
