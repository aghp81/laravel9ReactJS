import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';



if (document.getElementById('employeeeApp')) {
    const Index = ReactDOM.createRoot(document.getElementById("employeeeApp"));

    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
} 