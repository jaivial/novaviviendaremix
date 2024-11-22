import React, { useReducer } from "react";

interface State {
  count: number;
  error: string | null;
}

const initialState: State = {
  count: 0,
  error: null,
};

interface Action {
  type: "increment" | "decrement";
}

function reducer(state: State, action: Action) {
  const { type } = action;
  switch (type) {
    case "increment": {
      return { ...state, count: state.count + 1 };
    }
    case "decrement": {
      return { ...state, count: state.count - 1 };
    }
    default:
      return state;
  }
}

const ReducerCompoent: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="w-fit h-fit p-10 text-white z-[9999]">
      <div className="">Count: {state.count}</div>
      {state.error && <div className="mb-2 text-red-500">{state.error}</div>}
      <button className="mb-2 z-[9999]" onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>
      <button className="mb-2 z-[9999]" onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>
    </div>
  );
};

export default ReducerCompoent;
