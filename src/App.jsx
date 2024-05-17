import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Actions from './components/Actions/Actions';
import ForClients from './components/ForClients/ForClients';
import Servises from './components/Servises/Servises';
import News from './components/News/News';
import Support from './components/Support/Support';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="app" element={<MainLayout />}>
            <Route path="header" element={<Header />} />
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="about" element={<About />} />
            <Route path="actions" element={<Actions />} />
            <Route path="forclients" element={<ForClients />} />
            <Route path="servises" element={<Servises />} />
            <Route path="news" element={<News />} />
            <Route path="support" element={<Support />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
