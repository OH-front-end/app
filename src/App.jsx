import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="app" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
