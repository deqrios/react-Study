import React from "react";
import { connect } from "react-redux";
import { actionCreater } from "../store";
import { Link } from "react-router-dom";

function Todo({ text, onBtnClick, id }) {
    return (
        <li>
            <Link to={`\${id}`}>
                {text} <button onClick={onBtnClick}>DELETE</button>
            </Link>
        </li>
    );
}

function mappingDispatch({ dispatch, props }) {
    return { onBtnClick: () => dispatch(actionCreater.del(props.id)) };
}

export default connect(null, mappingDispatch)(Todo);
