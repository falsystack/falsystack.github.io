import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from "./GobalStyle";
import IndexPage from "./IndexPage";


const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(
    <>
        <GlobalStyle />
        <IndexPage />
        <App />
    </>
);
