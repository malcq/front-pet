import { Suspense, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Counter from './components/Counter/Counter';
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';
import './styles/index.scss';

import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', { hovered: false }, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>

      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path='/' element={<MainPageAsync />} />
        </Routes>
      </Suspense>
      <Counter />
    </div>
  );
};

export default App;
