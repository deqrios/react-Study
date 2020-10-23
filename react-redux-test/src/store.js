import { createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const add = text => {
    return {
        type: ADD_TODO,
        text
    };
};

const del = id => {
    return {
        type: DELETE_TODO,
        id: parseInt(id)
    };
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [{ ...state, text: action.text, id: Date.now() }];
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
};

const store = createStore(reducer);

export const actionCreater = {
    add,
    del
};

export default store;
