// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

import axios from 'axios';

export const FETCH_SW_START = 'FETCH_SW_START ';
export const FETCH_SW_SUCCESS = 'FETCH_SW_SUCCESS';
export const FETCH_SW_FAILURE = 'FETCH_SW_FAILURE';

// the returned function is a thunk
export const getCharacter = () => dispatch => {
	dispatch({ type: FETCH_SW_START });
	axios
		.get('https://swapi.co/api/people')
		.then(res =>
			dispatch({ type: FETCH_SW_SUCCESS, payload: res.data.results })
		)
		.catch(err => dispatch({ type: FETCH_SW_FAILURE, payload: err }));
};
