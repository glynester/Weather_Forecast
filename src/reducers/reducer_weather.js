import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {
  console.log("Action received", action);  // Action received Object { type: "FETCH_WEATHER", payload: {…} }
  switch (action.type) {
    case FETCH_WEATHER: return [action.payload.data, ...state];  //  Need to add onto the existing state not replace the existing state entirely. Don' mutate state by doing something like state.push(action.payload.data). We must return a completely new instance of state. 
    // We could use state.concat([action.payload.data]);
  }
  return state;
}