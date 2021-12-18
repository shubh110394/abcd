import { createStore, combineReducers,applyMiddleware,compose } from "redux";
import { todoreducer } from "./TodoStore/reducer";
import { countreducer } from "./CounterStore/reducer";
import { loginreducer } from "./LoginStore/reducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    login:loginreducer,
	todos: todoreducer,
    count: countreducer,
    
});

const middleware1 = (store) => (next) => (action) => {
    if (typeof action === "function") {
        action(store.dispatch);
    }
    else next(action);
    // console.log("mw2",typeof action);
    
}

const middleware2 = (store) => (next) => (action) => {
    console.log("mw2");
    next(action);
}

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk, middleware2),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    
);
// store.subscribe

console.log(store.getState());
