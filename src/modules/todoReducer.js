// Ducks 패턴 사용: 액션 타입, 액션 생성 함수, 리듀서를 한 번에 관리한다.
import { v4 as uuidv4 } from 'uuid';

const LS_TODOS = 'todos';

const ADD = 'todo/ADD';
const REMOVE = 'todo/REMOVE';
const EDIT = 'todo/EDIT';
const TOGGLE = 'todo/TOGGLE';

const add = (text) => {
  return {
    type: ADD,
    text,
  };
};

const remove = (id) => {
  return {
    type: REMOVE,
    id,
  };
};

const edit = (id, text) => {
  return {
    type: EDIT,
    id,
    text,
  };
};

const toggle = (id) => {
  return {
    type: TOGGLE,
    id,
  };
};

export const todoActionCreators = {
  add,
  remove,
  edit,
  toggle,
};

const saveTodos = (todos) => {
  localStorage.setItem(LS_TODOS, JSON.stringify(todos));
  return todos;
};

const todoReducer = (state = [], action) => {
  const loadTodos = localStorage.getItem(LS_TODOS);
  if (loadTodos !== null) {
    state = JSON.parse(loadTodos);
  }

  switch (action.type) {
    case ADD:
      let newTodo = { text: action.text, id: uuidv4(), editable: false, complete: false };
      const added = [newTodo, ...state];
      return saveTodos(added);
    case REMOVE:
      const removed = [...state].filter((todo) => todo.id !== action.id);
      return saveTodos(removed);
    case EDIT:
      const edited = [...state].map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text, editable: false } : todo
      );
      return saveTodos(edited);
    case TOGGLE:
      const toggled = [...state].map((todo) => (todo.id === action.id ? { ...todo, complete: !todo.complete } : todo));
      return saveTodos(toggled);
    default:
      return state;
  }
};

export default todoReducer;
