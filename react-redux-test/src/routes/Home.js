import React, { useState } from "react";
import { connect } from "react-redux";
import Todo from "../components/Todo";

function Home({ todos }) {
    const [text, setText] = useState("");

    function onSubmit(event) {
        event.preventDefault();
        setText("");
    }

    function onChange(event) {
        setText(event.target.value);
    }

    return (
        <>
            <h1>Todo List</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>ADD</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <Todo {...todo} key={todo.id}></Todo>
                ))}
            </ul>
        </>
    );
}

function mappingState(state) {
    return { todos: state };
}

export default connect(mappingState)(Home);
