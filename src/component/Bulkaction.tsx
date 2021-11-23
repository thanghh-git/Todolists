import React from 'react'
import { useDispatch } from 'react-redux'
import '../App.css'
import { removeAllTodo } from '../app/action/action_creators'



const BulkAction = () => {
    const dispatch = useDispatch();
    const handleDeleteAll = () => {
        dispatch(removeAllTodo());
    }

    return (
        <React.Fragment>
            <div className="d-flex justify-content-between align-items-center mb-4" style={{ padding: "32px", border: '1px black solid' }}>
                <div style={{ fontSize: "18px" }}>Bulk Action:</div>
                <div>
                    <button type="button" className="btn detail-btn mx-2">Done</button>
                    <button onClick={handleDeleteAll} type="button" className="btn remove-btn mx-2">Remove</button>
                </div>
            </div >
        </React.Fragment >
    )
}

export default BulkAction;
