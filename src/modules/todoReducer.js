// Ducks 패턴 사용: 액션 타입, 액션 생성 함수, 리듀서를 한 번에 관리한다.
import { v4 as uuidv4 } from 'uuid';

const ADD = 'todo/ADD';
const REMOVE = 'todo/REMOVE';
const EDIT = 'todo/EDIT';

const add = (text) => {
  return {
    type: ADD,
    todo: text,
  };
};

const remove = () => {
  return {
    type: REMOVE,
  };
};

const edit = () => {
  return {
    type: EDIT,
  };
};

export const todoActionCreators = {
  add,
  remove,
  edit,
};

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      let newTodo = { todo: action.todo, id: uuidv4() };
      return [newTodo, ...state];
    case REMOVE:
      return state;
    case EDIT:
      return state;

    default:
      return state;
  }
};

export default todoReducer;
