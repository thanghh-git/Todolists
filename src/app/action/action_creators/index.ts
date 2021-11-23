import { Action_types } from './../action_types';
import { Action_Model } from './../action_models';


export const addTodo = (todo: Todo): Action_Model => ({
    type: Action_types.ADD_NEW_TODO,
    payload: todo
  });

  export const removeTodo = (id: string): Action_Model => ({
    type: Action_types.REMOVE_TODO,
    payload: id
  });

  export const updateTodo = (todo: Todo): Action_Model => ({
    type: Action_types.UPDATE_TODO,
    payload: todo
  });

  export const removeAllTodo = (): Action_Model => ({
    type: Action_types.REMOVEALL_TODO
  });

  export const searchTodo = (value:string): Action_Model => ({
    type: Action_types.SEARCH_TODO,
    payload:value
  });
  