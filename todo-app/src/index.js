import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const add = text => {
    return { type: ADD_TODO, text };
};

const del = id => {
    return { type: DELETE_TODO, id };
};

const addTodo = text => {
    store.dispatch(add(text));
};

const deleteTodo = event => {
    const id = parseInt(event.target.parentNode.id);
    store.dispatch(del(id));
};

const displayTodo = () => {
    const todos = store.getState();
    ul.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.innerText = "Delete";
        button.addEventListener("click", deleteTodo);
        li.id = todo.id;
        li.innerText = todo.text;
        li.appendChild(button);
        ul.appendChild(li);
    });
};

function todoSubmit(event) {
    event.preventDefault();
    const todo = input.value;
    input.value = "";
    addTodo(todo);
}

function reducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, { text: action.text, id: Date.now() }];
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        default:
            return [];
    }
}

const store = createStore(reducer);

form.addEventListener("submit", todoSubmit);

store.subscribe(() => {
    displayTodo();
});
