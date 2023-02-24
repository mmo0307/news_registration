import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from './component/header/Header';
import { Home } from './component/home/Home';
import { News } from './component/news/News';
import { NoPage } from './component/nopage/NoPage';
import { Profile } from './component/profile/Profile';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='news' element={<News />} />
          <Route path='profile' element={<Profile />} />

          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
