
import {actionNames} from '../actions/AssignmentOne';

const INITIAL_STATE = {
    searchText: "",
    artists: [],
    error: null
};
export default function AssignmentOne(state = INITIAL_STATE, action) {

    switch(action.type) {

        case actionNames.GET_ARTISTS:
            return {
                ...state,
                searchText: action.searchText,
                artists: [],
                error:null
            };
        case actionNames.GET_ARTISTS_OK:
            return {
                ...state,
                artists: action.payload,
                error:null
            };
        case actionNames.GET_ARTISTS_FAIL:
            return {
                ...state,
                artists: [],
                error: action.payload.message || {message: action.payload.message}
            };
        case actionNames.RESET_ARTIST:
            return {
                searchText: "",
                artists: [],
                error: null
            };
        default:
            return state;
    }
}