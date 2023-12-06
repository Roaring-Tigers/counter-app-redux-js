
import { INCREASE, DECREASE, RESET } from '../actions/actionTypes.js'

const initialState = 0 



// todo : 1. update the parameter of the function later
function counterReducer(state=initialState, action){  
      
    switch(action.type){
        case INCREASE:  return  state + action.value
        case DECREASE:  return  state - 1
        case RESET: return initialState
        default: return state
    }
}

// to add intial value to store =>   counterReducer()

// counterReducer(0, {type: 'INCREASE'})

// counterReducer(0, {type: 'INCREASE', value: 10})







export default counterReducer





// counterReducer(100, {type: 'INCREMENT'}) => 101