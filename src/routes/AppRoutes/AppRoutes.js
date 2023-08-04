import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import ProductsPage from '../../pages/ProductsPage/ProductsPage';
import AboutUs from '../../pages/AboutUsPage/AboutCompany/AboutCompany';
import History from '../../pages/AboutUsPage/History/History';
import ProductDetail from '../../pages/ProductDetail/ProductDetail';
import PageNotFound from '../../containers/shared/PageNotFound/PageNotFound';
const ContactUsPage = React.lazy(() => import('../../pages/ContactUsPage/ContactUsPage'));

// this is a func not a comp
const AppRoutes = () => {
  return (
    <Suspense fallback={<div className='spinner-border text-primary'></div>}>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about-us' element={<AboutUsPage />}>
        <Route path='history' element={<History />} />
        <Route path='about-company' element={<AboutUs />} />
      </Route>
      <Route path='/contact-us' element={<ContactUsPage />} />
      <Route path='/products' element={<ProductsPage />}>
      </Route>
      <Route path='/products/:productId' element={<ProductDetail />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
    </Suspense>
  );
};

export default AppRoutes;
