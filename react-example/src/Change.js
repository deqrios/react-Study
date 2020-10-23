import React, { useState, useEffect, Fragment } from "react";

const Change = () => {
    const text = "write your name.";
    const [sign, setSign] = useState(text);

    function changeText() {
        if (sign === text) {
            setSign("right your name?");
        } else {
            setSign(text);
        }
    }

    function changeEffect() {
        if (sign === text) {
            document.getElementById("p").style.color = "blue";
        } else {
            document.getElementById("p").style.color = "red";
        }
    }

    useEffect(changeEffect);

    return (
        <Fragment>
            <input placeholder={sign} onClick={changeText} />
            <p id="p">{sign === text ? "Ok" : "Nope"}</p>
        </Fragment>
    );
};

export default Change;
