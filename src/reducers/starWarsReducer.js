import { FETCH_SW_START, FETCH_SW_SUCCESS, FETCH_SW_FAILURE } from '../actions';
const initialState = {
	characters: [],
	isLoading: false,
	error: null,
	// Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
	switch (action.type) {
		// Fill me in with the important reducers
		// action types should be FETCHING, SUCCESS and FAILURE
		// your switch statement should handle all of these cases.
		case FETCH_SW_START:
			// debugger;
			return {
				...state,
				error: '',
				isLoading: true,
			};
		case FETCH_SW_SUCCESS:
			return {
				...state,
				characters: action.payload,
				isLoading: false,
				error: '',
			};
		case FETCH_SW_FAILURE:
			return {
				...state,
				characters: null,
				isLoading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
