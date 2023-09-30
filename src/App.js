import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesList from './pages/MoviesList';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesList />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
