import { FETCH_WEATHER } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      console.log('FETCH_WEATHER called', action.payload.data);
      if (action.error) {
        return state;
      } else {
        return [ action.payload.data, ...state ];
      }
    default:
      return state;
  }
}