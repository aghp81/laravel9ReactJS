import React, { Component } from 'react';
import { toast } from 'react-toastify';

class UpdateModal  extends Component{


    constructor(props){
        super(props);

        this.state = {
            employeeName: null,
            employeeSalary: null

        }
    }

    // Updating Employee Name State

    inputEmployeeName = (event) => {
        this.setState({
            employeeName: event.target.value,

        });
    }

    // Update Employee Salary State.

    inputEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value,

        });
    }

    static getDerivedStateFromProps(props, current_state){
        let employeeUpdate = {
            employeeName: null,
            employeeSalary: null,
        }


        // Updating data from input.

        if(current_state.employeeName && (current_state.employeeName !== props.employeeData.currentEmployeeName)){
            return null;
        }

        if(current_state.employeeSalary && (current_state.employeeSalary !== props.employeeData.currentEmployeeSalary)){
            return null;
        }




        // Updateing datafrom props Below.

        if(current_state.employeeName !== props.employeeData.currentEmployeeName 
            || 
        current_state.employeeName === props.employeeData.currentEmployeeName) {
            employeeUpdate.employeeName = props.employeeData.currentEmployeeName;
        }

        if(current_state.employeeSalary !== props.employeeData.currentEmployeeSalary
            || 
        current_state.employeeSalary === props.employeeData.currentEmployeeSalary) {
            employeeUpdate.employeeSalary = props.employeeData.currentEmployeeSalary;
        }

        return employeeUpdate;
    }


    //Updating employee data.

    updateEmployeeData = () => {
        axios.post('/update/employee/data', {
            employeeId: this.props.modalId,
            employeeName: this.state.employeeName,
            employeeSalary: this.state.employeeSalary,
        }).then(() => {
             toast.success("Employee Update Successfully.");
             setTimeout(() => {
                location.reload();
             }, 2500)
            // console.log(response);
            // location.reload();
        })
    }

    render() {
        return(
            <div className="modal fade" id={ "updateModal"+this.props.modalId } tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Employee Details</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className='form'>
                            <div className="form-group">
                                <input type="text" 
                                    id="employeeName"
                                    value={ this.state.employeeName ?? "" }
                                    onChange={this.inputEmployeeName}
                                />
                            </div>

                            <div className="form-group">
                                <input type="text" 
                                    id="employeeSalary"
                                    value={ this.state.employeeSalary ?? "" }
                                    onChange={this.inputEmployeeSalary}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <input type="submit"
                            className="btn btn-info" 
                            value="Update"
                            onClick={this.updateEmployeeData}
                        />
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateModal;