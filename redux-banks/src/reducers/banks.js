import { GET_BANKS } from '../actions/types.js';

const initialState = {
  banks: [],
  
};

export default function(state = initialState, action){
	switch (action.type) {
		case GET_BANKS:
			return {
				...state,
				banks: action.payload,
			};
		default:
		 return state;
	}
}