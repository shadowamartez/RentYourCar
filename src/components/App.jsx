import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('./pages/Home/Home'));
const CarsCatalog = lazy(() => import('./pages/CarsCatalog/CarsCatalog'));
const CarsFavorites = lazy(() => import('./pages/CarsFavorites/CarsFavorites'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home/>} />
          <Route path="/catalog" element={<CarsCatalog/>} />
          <Route path="/favorites" element={<CarsFavorites/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <GlobalStyles/>
    </Suspense>
  );
};
