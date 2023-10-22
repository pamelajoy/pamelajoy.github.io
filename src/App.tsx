import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Home from './scenes/Home'
import About from './scenes/About'
import Blog from './scenes/Blog'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<></>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
