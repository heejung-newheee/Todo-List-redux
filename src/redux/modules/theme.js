const SET_THEME = 'theme/SET_THEME';

export const setTheme = (key, value) => ({
    type: SET_THEME,
    payload: { key, value }
});

export const lightTheme = {
    backgroundColor: 'white',
    fontColor: 'black'
};

export const darkTheme = {
    backgroundColor: 'black',
    fontColor: 'white'
};

const initialState = {
    color: lightTheme,
    font: '10px'
};

const theme = (state = initialState, action) => {
    switch (action.type) {
        case SET_THEME:
            const { key, value } = action.payload;

            return { ...state, [key]: value };
        default:
            return state;
    }
};

export default theme;
