import './App.scss';

import HomePage from '@/pages/HomePage/HomePage';
import Mainlayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Mainlayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Mainlayout>
    </BrowserRouter>
  );
}

export default App;
