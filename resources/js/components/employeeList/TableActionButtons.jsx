import React, { Component } from 'react';
import ViewModal from './Modals/ViewModal';


class TableActionButtons  extends Component{


    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="btn-group" role="group">

                
                

                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    View
                </button>
                <ViewModal />



                <button type="button" className="btn btn-info">Update</button>
                <button type="button" className="btn btn-danger">Delete</button>
            </div>
        )
    }
}

export default TableActionButtons;