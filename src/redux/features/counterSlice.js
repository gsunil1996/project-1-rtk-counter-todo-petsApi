const { createSlice } = require("@reduxjs/toolkit");

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        newValue: 1
    },
    reducers: {
        increment: (state, action) => {
            // we dont require to spread the state because inside redux-tool-kit there is immer, this would take care of spreading etc
            state.value += 1
        },
        decrement: (state, action) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 1000)
}

export default counterSlice.reducer