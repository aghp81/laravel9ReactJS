import React, { Component } from 'react';
import TableRow from './TableRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Table  extends Component{


    constructor(props) {
        super(props);

        this.state = {
            employees: [],
        }
    }


    //Life Cycle Method.
    componentDidMount() {
        this.getEmployeeList();
    }

    //Get Employee list.
    getEmployeeList = () => {
        let self = this;
        axios.get('get/employee/list').then(function(response) {
            self.setState({
                employees: response.data
            });
        });
    }


    render(){
        return (
            <div className="container">
                <ToastContainer />
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
    
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th scope="col" width="100px">#</th>
                                <th scope="col" width="100px">Name</th>
                                <th scope="col" width="100px">Salary</th>
                                <th scope="col" width="100px">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.employees.map(function(x, i) {
                                    return <TableRow key={i} data={x} />
                                })}
                                
                                
                            </tbody>
                        </table>
    
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Table;


