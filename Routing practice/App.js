import './App.css';
import Home from './components/Home';
import Word from './components/Word';
import Color from './components/Color';
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/:word" element={<Word/>} />
        <Route path="/:word/:color1/:color2" element={<Color/>} />
      </Routes>
    </div>
  );
}

export default App;
