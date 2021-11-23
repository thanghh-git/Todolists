import React from 'react'
import Todo from './Todo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/reducers';
import { searchTodo } from '../app/action/action_creators';

const Todolists = () => {
    console.log("re - render")
    const { todolists } = useSelector((state: RootState) => state.newtaskReducer);
    console.log(todolists);
    const dispatch = useDispatch();
    const handleChangeValue = (e: any) => {
        console.log(e.target.value)
        dispatch(searchTodo(e.target.value));
    }

    return (
        <div>
            <h4 className="text-center mb-5">Todo lists</h4>
            <input onChange={(e) => { handleChangeValue(e) }} className='form-control mb-3' type="text" placeholder="Search..." />
            <ul style={{ paddingLeft: "0px" }}>
                {todolists.map((item, index) => {
                    return (
                        <li key={index} style={{ listStyle: "none" }}>
                            < Todo todo={item} />
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}

export default Todolists;
