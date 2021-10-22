// Ducks 패턴 사용: 액션 타입, 액션 생성 함수, 리듀서를 한 번에 관리한다.

const ADD = 'todo/ADD';
const REMOVE = 'todo/REMOVE';
const EDIT = 'todo/EDIT';

export const add = () => {
  return {
    type: ADD,
  };
};

export const remove = () => {
  return {
    type: REMOVE,
  };
};

export const edit = () => {
  return {
    type: EDIT,
  };
};

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return state;
    case REMOVE:
      return state;
    case EDIT:
      return state;
    default:
      return state;
  }
};

export default todoReducer;
