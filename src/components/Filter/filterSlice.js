/**
 *      Redux core
 */

// const initState = {
//     search: '',
//     status: 'All',
//     priority: []
// }

// const filterReducer = (state = initState, action) => {

//     switch (action.type) {

//         case 'filter/updateFilter':
//             return action.payload

//         default:
//             return state
//     }
// }

// export default filterReducer


/**
 *      Redux toolkit
 */

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'filter',
    initialState: {
        search: '',
        status: 'All',
        priority: []
    },
    reducers: {
        updateFilter: (state, action) =>{
            state.search = action.payload.search
            state.status = action.payload.status
            state.priority = action.payload.priority
        }
    }
})