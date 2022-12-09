import React from 'react';
import ReactDOM from 'react-dom/client';
import Table from './employeeList/Table';


function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                {/* Components Goes here */}
                <Table />
            </div>
        </div>
    );
}

export default App;
