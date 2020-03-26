import axios from 'axios';
import { GET_BANKS } from './types';

export const getBanks = () => (dispatch, getState) => {
	axios
		.get("https://api.myjson.com/bins/19e11s")
		.then(res => {
			dispatch({
				type: GET_BANKS,
				payload: res.data
			});
		})
		.catch(err =>
			console.log(err)
		);
}