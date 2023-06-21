// state 의 그룹

// action value
const ADD_TODO = 'todos/ADD_TODO';
const DEL_TODO = 'todos/DEL_TODO';
const SWITCH_DONE = 'todos/SWITCH_DONE';

// action creator
export const addTodo = (payload) => {
    // console.log('ddddd', payload);
    return {
        type: ADD_TODO,
        payload
    };
};
export const delTodo = (id) => {
    return {
        type: DEL_TODO,
        id
    };
};
export const switchDone = (id) => {
    return {
        type: SWITCH_DONE,
        id
    };
};

// todo 초기 상태값
const initialState = {
    todolists: [
        {
            id: 1,
            title: '제목입니다1',
            contents: '내용을 입력해 주세요1',
            isDone: false
        },
        {
            id: 2,
            title: '제목입니다2',
            contents: '내용을 입력해 주세요2',
            isDone: true
        },
        {
            id: 3,
            title: '제목입니다3',
            contents: '내용을 입력해 주세요3',
            isDone: false
        },
        {
            id: 4,
            title: '제목입니다4',
            contents: '내용을 입력해 주세요4',
            isDone: false
        }
    ]
};

// 리듀서 :  함수
// input : state와 action

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todolists: [...state.todolists, action.payload]
            };

        case DEL_TODO:
            return {
                todolists: state.todolists.filter((item) => item.id !== action.id)
            };
        case SWITCH_DONE:
            return {
                todolists: state.todolists.map((item) => (item.id === action.id ? { ...item, isDone: !item.isDone } : item))
            };
        default:
            return state;
    }
};

export default todos;
