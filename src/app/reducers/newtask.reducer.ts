import { removeall, updateNewTodo } from '../../share/logic';
import { Action_Model } from '../action/action_models/index';
import { Action_types } from '../action/action_types';

interface InitialValues {
  todolists: Todo[]
}

const initialValues: InitialValues = {
  todolists: []
};
let cloneTodolists:Todo[]=[];
const newtaskReducer = (state: InitialValues = initialValues, action: Action_Model) => {
  switch (action.type) {
    case Action_types.ADD_NEW_TODO:
      const newTodo = action.payload;
      cloneTodolists.push(action.payload);
      return { ...state, todolists: [...state.todolists, newTodo] };
    case Action_types.REMOVE_TODO:
      cloneTodolists=cloneTodolists.filter(item=>item.id!==action.payload);
      return { ...state, todolists: [...state.todolists.filter((todo, index) => todo.id !== action.payload)] };
    case Action_types.UPDATE_TODO:
      const cloneTodoUpdate= { ...state, todolists: updateNewTodo(action.payload, state.todolists) };
      cloneTodolists=cloneTodoUpdate.todolists;
      return { ...state, todolists: updateNewTodo(action.payload, state.todolists) };
    case Action_types.REMOVEALL_TODO:
      const cloneRemoveAll={ ...state, todolists: removeall(state.todolists) };
      cloneTodolists=cloneRemoveAll.todolists;
      return { ...state, todolists: removeall(state.todolists) };
    case Action_types.SEARCH_TODO: 
      const todolist =cloneTodolists.filter((item) => item.title.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()));
      return { ...state, todolists: todolist };
    default:
      return state;
  }
}
export default newtaskReducer;