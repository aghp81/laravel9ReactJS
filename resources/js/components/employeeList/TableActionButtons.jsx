import axios from 'axios';
import React, { Component } from 'react';
import ViewModal from './Modals/ViewModal';


class TableActionButtons  extends Component{


    constructor(props){
        super(props);

        this.state = {
            currontEmployeeName: null,
            currentEmployeeSalary: null,
        }
    }


    //Getting Individual employee data.
    getEmployeeDetails = (id) => {
        axios.post('/gst/individual/employee/details', {
            employeeId: id
        }).then((response) => {
            this.setState({
                currontEmployeeName: response.data.employee_name,
                currentEmployeeSalary: response.data.salary,
            })
            console.log(response.data);
        })
    }


    render() {
        return(
            <div className="btn-group" role="group">

                
                

                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                onClick={ () => { this.getEmployeeDetails(this.props.eachRowId) } }
                >
                    View
                </button>
                <ViewModal modalId={ this.props.eachRowId } employeeData={ this.staet } />



                <button type="button" className="btn btn-info">Update</button>
                <button type="button" className="btn btn-danger">Delete</button>
            </div>
        )
    }
}

export default TableActionButtons;