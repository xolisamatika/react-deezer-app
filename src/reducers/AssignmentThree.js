
import {actionNames} from '../actions/AssignmentThree';

const INITIAL_STATE = {
    albumId: null,
    tracks: [],
    error: null
};
export default function AssignmentThree(state = INITIAL_STATE, action) {
    console.log(action)
    switch(action.type) {

        case actionNames.GET_TRACKS:
            return {
                ...state,
                albumId: action.albumId,
                tracks: [],
                error:null
            };
        case actionNames.GET_TRACKS_OK:
            return {
                ...state,
                tracks: action.payload,
                error:null
            };
        case actionNames.GET_TRACKS_FAIL:
            return {
                ...state,
                tracks: [],
                error: action.payload.message || {message: action.payload.message}
            };
        case actionNames.RESET_ALBUM:
            return {
                albumId: "",
                tracks: [],
                error: null
            };
        default:
            return state;
    }
}