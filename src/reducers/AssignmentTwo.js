
import {actionNames} from '../actions/AssignmentTwo';

const INITIAL_STATE = {
    artistId: null,
    albums: [],
    error: null
};
export default function AssignmentTwo(state = INITIAL_STATE, action) {
    console.log(action)
    switch(action.type) {

        case actionNames.GET_ALBUMS:
            return {
                ...state,
                artistId: action.artistId,
                albums: [],
                error:null
            };
        case actionNames.GET_ALBUMS_OK:
            return {
                ...state,
                albums: action.payload,
                error:null
            };
        case actionNames.GET_ALBUMS_FAIL:
            return {
                ...state,
                albums: [],
                error: action.payload.message || {message: action.payload.message}
            };
        case actionNames.RESET_ARTIST:
            return {
                artistId: "",
                albums: [],
                error: null
            };
        default:
            return state;
    }
}