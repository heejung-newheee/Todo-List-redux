// 중앙 데이터 관리소 설정
import { createStore } from 'redux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({});
const store = createStore(rootReducer);

export default store;
