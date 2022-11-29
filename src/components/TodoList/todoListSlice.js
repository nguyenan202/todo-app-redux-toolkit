
/**
 *      Redux core
 */

// const initState = [
//     { id: 1, name: 'learn Javascript', completed: true, priority: 'Medium' },
//     { id: 2, name: 'learn Native', completed: false, priority: 'Low' },
//     { id: 3, name: 'learn C#', completed: false, priority: 'High' }
// ]

// const todoListReducer = (state = initState, action) => {

//     switch (action.type) {

//         case 'todoList/addTodo':
//             return [
//                 ...state,
//                 action.payload
//             ]

//         case 'todoList/setCompleted':

//             let newTodoList = [...state]

//             newTodoList.forEach(todo => {
//                 if (todo.id === action.id) {
//                     todo.completed = !todo.completed
//                 }
//             })

//             return newTodoList

//         default:
//             return state
//     }
// }

// export default todoListReducer


/**
 *      Redux toolkit
 */

import { createSlice } from "@reduxjs/toolkit"

export default createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'learn Javascript', completed: true, priority: 'Medium' },
        { id: 2, name: 'learn Native', completed: false, priority: 'Low' },
        { id: 3, name: 'learn C#', completed: false, priority: 'High' }
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        setCompleted: (state, action) => {
            state.forEach(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                }
            })
        }
    }
})