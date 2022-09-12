import React from 'react';

import Header from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
