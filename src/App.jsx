import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import {
  Home,
  About,
  Projects,
  Education,
  Contact,
  Marketing,
  Acting,
} from './pages';
import ImagePage from './components/ImagePage';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div>
      <main className=" h-full">
        <Router>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/projects"
              element={<Projects />}
            />
            <Route
              path="/marketing"
              element={<Marketing />}
            />
            <Route
              path="/education"
              element={<Education />}
            />
            <Route
              path="/acting"
              element={<Acting />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route
              path="/image/:imageName"
              element={<ImagePage />}
            />
          </Routes>
        </Router>
      </main>
    </div>
  );
};

export default App;
