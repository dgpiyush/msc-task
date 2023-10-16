import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage.jsx';
import DetailPage from './pages/DetailPage.jsx';
import TopBar from './components/TopBar.jsx';
import Footer from './components/Footer.jsx';
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<HomePage/> ,
  },
  {
    path: "/detail/:id",
    element: <DetailPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <TopBar/>
     <RouterProvider router={router} />
     <Footer/>
     
  </React.StrictMode>,
)
