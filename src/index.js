import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css';
import App from './App';
import ErrorPage from './screens/Error';
import Info from './screens/Info';
import Banner from './componentes/Banner';
import Footer from './componentes/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/info/:id',
    element: <Info/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Banner/>
      <RouterProvider router={router}/>
    <Footer/>
  </React.StrictMode>
);
