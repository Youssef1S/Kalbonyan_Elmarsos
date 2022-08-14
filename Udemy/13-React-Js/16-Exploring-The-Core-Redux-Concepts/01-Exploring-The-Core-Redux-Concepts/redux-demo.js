const redux = require("redux");

const counterReducer = (curState = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: ++curState.counter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: --curState.counter,
    };
  }
  return curState;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
