import { Suspense } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './styles/index.scss';

import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', { hovered: false }, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>

      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
