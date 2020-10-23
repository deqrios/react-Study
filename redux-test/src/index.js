import { createStore } from "redux"; //  createStore-데이터 저장소

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const PLUS_COUNT = "PLUS";
const MINUS_COUNT = "MINUS";

const countModifier = (count = 0, action) => {
    //  console.log(count, action);

    switch (action.type) {
        case PLUS_COUNT:
            return count + 1;
        case MINUS_COUNT:
            return count - 1;
        default:
            return count;
    }
};

// subscribe ==> componentDidUpdate()
const countUpdater = () => {
    number.innerText = countStore.getState();
};

const countStore = createStore(countModifier);
countStore.subscribe(countUpdater);

plus.addEventListener("click", () => {
    countStore.dispatch({ type: PLUS_COUNT });
});

minus.addEventListener("click", () => {
    countStore.dispatch({ type: MINUS_COUNT });
});

/* ***** Vanilla Javascript Ver. 

let count = 0;
number.innerText = count;

const displayCount = () => {
    number.innerText = count;
};

const handlePlus = () => {
    count = count + 1;
    displayCount();
};

const handleMinus = () => {
    count = count - 1;
    displayCount();
};

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);

***** */
