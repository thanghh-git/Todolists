import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../App.css';
import { removeTodo, updateTodo } from '../app/action/action_creators';
import NewTask from './NewTask';

interface TodoProps {
    todo: Todo
}

const Todo = ({ todo }: TodoProps) => {
    const dispatch = useDispatch()
    const [isDetail, setisDetail] = useState<boolean>(false);
    const [isBulkAction, setisBulkaction] = useState<boolean>(false);
    const handlechange = (e: any) => {
        dispatch(updateTodo({
            id: todo.id,
            title: todo.title,
            description: todo.description,
            date: todo.date,
            priority: todo.priority,
            isShow: false,
            checked: e.target.checked
        }))
        setisBulkaction(!isBulkAction);
    }

    const handleDetail = (id: string) => {
        setisDetail(!isDetail);
    }
    console.log(isDetail);

    const handleDelete = (id: string) => {
        dispatch(removeTodo(id))
    }
    return (
        <React.Fragment>
            <div className="d-flex justify-content-between align-items-center mb-4" style={{ padding: "20px", border: '1px black solid' }}>
                <div className="d-flex" >
                    <form className="d-flex align-items-center">
                        <input className="form-check-input mx-2" onChange={(e) => handlechange(e)} type="checkbox" id="vehicle1" name="vehicle1" checked={todo.checked} />
                    </form>
                    <div className="mx-2" style={{ fontSize: "18px" }}>{todo?.title.length <= 8 ? todo.title : todo.title.slice(0, 8) + '...'}</div>
                </div>
                <div>
                    <button onClick={() => { handleDetail(todo?.id) }} type="button" className="btn detail-btn mx-2">Detail</button>
                    <button onClick={() => { handleDelete(todo?.id) }} type="button" className="btn remove-btn mx-2">Remove</button>
                </div>
            </div >
            {isDetail ? <NewTask isUpdate={isDetail} idx={todo?.id} /> : null}
        </React.Fragment >
    )
}

export default Todo
