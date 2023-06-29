// 중앙 데이터 관리소 설정
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import todos from '../modules/todos';
import theme from '../modules/theme';

const rootReducer = combineReducers({
    todos,
    theme
});
const store = createStore(rootReducer);

export default store;
