
//  Redux core

// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composeEnhancers = composeWithDevTools()

// const store = createStore(rootReducer, composeEnhancers)

// export default store



// Redux toolkit
import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../components/Filter/filterSlice";
import todoListSlice from "../components/TodoList/todoListSlice";

const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        todoList: todoListSlice.reducer
    }
})

export default store