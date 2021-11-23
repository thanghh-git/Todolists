import {Action_types} from './../action_types';

interface AddnewTodo{
    type:Action_types.ADD_NEW_TODO,
    payload:Todo
}
interface RemoveTodo{
    type:Action_types.REMOVE_TODO,
    payload:string
}
interface UpdateTodo{
    type:Action_types.UPDATE_TODO,
    payload:Todo
}


interface RemoveAllTodo{
    type:Action_types.REMOVEALL_TODO
}
interface SearchTodo{
    type:Action_types.SEARCH_TODO,
    payload:string
}
export type Action_Model = AddnewTodo | RemoveTodo|UpdateTodo|RemoveAllTodo|SearchTodo;