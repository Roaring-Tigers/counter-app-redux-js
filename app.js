import store from './redux/store.js';
import {increase, decrease, reset} from './redux/actions/counterActions.js'

// getState(), dispatch()

console.log(store.getState())



store.dispatch(increase(10)) // =>  {type: 'INCREASE', value: 10}
console.log(store.getState())


store.dispatch(increase(100))
console.log(store.getState())