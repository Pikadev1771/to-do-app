import { legacy_createStore as createStore } from 'redux'; // 1) createStore 불러오기
import { rootReducer } from '../reducers/reducer'; // 2) rootReducer 불러오기

export const store = createStore(rootReducer);
