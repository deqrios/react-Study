import React from "react";
import { connect } from "react-redux";

function Detail({ todo }) {
    return (
        <>
            <h1>{todo.text}</h1>
            <h3>Date by {todo.id}</h3>
        </>
    );
}

function mappingState(state, props) {
    const {
        match: {
            params: { id }
        }
    } = props;

    return {
        todo: state.find(todo => todo.id === parseInt(id))
    };
}

export default connect(mappingState)(Detail);
