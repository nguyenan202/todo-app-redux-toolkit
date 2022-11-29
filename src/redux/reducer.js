import { combineReducers } from "redux"

import todoListReducer from "../components/TodoList/todoListSlice"
import filterReducer from "../components/Filter/filterSlice"

/**
 *      Split reducer
 */

// const rootReducer = (state = {}, action) => {
//     return {
//         filter: filterReducer(state.filter, action),
//         todoList: todoListReducer(state.todoList, action)
//     }
// }

const rootReducer = combineReducers({
    filter: filterReducer,
    todoList: todoListReducer
})

export default rootReducer