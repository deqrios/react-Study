import React, { useState, useEffect } from "react";

export default function App() {
    // "count"라는 새로운 상태 값을 정의합니다.
    const [count, setCount] = useState(0); //[변수,메소드]----[state, setState]

    useEffect(() => {
        document.title = `Clicked ${count} times!`;
    });

    state: {
        count: 0;
    }

    /*
        componentDidMount()
        componentDidUpdate()
    */

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Plus</button>
            <button onClick={() => setCount(count - 1)}>Minus</button>
        </div>
    );
}
