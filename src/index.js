import React, { Suspense } from "react";
import "./assets/scss/style.scss";
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";
import Loader from "./layouts/loader/Loader";
import client from './routes/Login'
import { ApolloProvider } from "@apollo/client";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Suspense fallback={<Loader />}>
     
    <HashRouter>
      <App />
    </HashRouter>
    
  </Suspense>
      
);
reportWebVitals();
