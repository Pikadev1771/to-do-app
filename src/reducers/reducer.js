import { initialState } from './initialState';

import { DELETE } from '../actions/actions'; // 2) 액션의 변수화한 type 문자열과 액션 생성자(함수) 불러오기

export const rootReducer = (state = initialState, action) => {
  // 3) reducer 만들기
  switch (action.type) {
    case DELETE:
      return Object.assign({}, state, {
        todos: state.todos.filter((el) => el.id !== action.payload),
      });
    default:
      return state;
  }
};
