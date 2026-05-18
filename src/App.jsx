import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import Recepti from './pages/Recepti';
import IzlenadiMe from './pages/IzlenadiMe';
import MaminaKuhinja from './pages/MaminaKuhinja';
import OMeni from './pages/OMeni';
import ReceptDetalj from './pages/ReceptDetalj';
import PageNotFound from './lib/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/recepti" element={<Recepti />} />
          <Route path="/recepti/:slug" element={<ReceptDetalj />} />
          <Route path="/iznenadi-me" element={<IzlenadiMe />} />
          <Route path="/mamina-kuhinja" element={<MaminaKuhinja />} />
          <Route path="/o-meni" element={<OMeni />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App