import React, { Component } from 'react';

class CreateModal  extends Component{


    constructor(props){
        super(props);

        this.state = {
            employeeName: null,
            employeeSalary: null

        }
    }

    // Creating Employee Name State

    inputEmployeeName = (event) => {
        this.setState({
            employeeName: event.target.value,

        });
    }

    // Creating Employee Salary State.

    inputEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value,

        });
    }

    render() {
        return(
            <div className="modal fade" id={ "modalCreate" } tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    placeholder="Name Here"
                                    onChange={this.inputEmployeeName}
                                />
                            </div>

                            <div className="form-group">
                                <input type="text" 
                                    id="employeeSalary"
                                    placeholder="Salary Here"
                                    onChange={this.inputEmployeeSalary}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateModal;