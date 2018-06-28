
import axios from 'axios';

const API_URL = 'https://api.deezer.com';
export  const actionNames = {
    GET_TRACKS: 'GET_TRACKS',
    GET_TRACKS_OK: 'GET_TRACKS_OK',
    GET_TRACKS_FAIL: 'GET_TRACKS_FAIL',
    GET_TRACKS: 'GET_TRACKS',
    GET_TRACKS_OK: 'GET_TRACKS_OK',
    RESET_ALBUM: 'RESET_ALBUM'
};

export async function getTracks(albumId) {
    const request = axios.get(`${API_URL}/album/${albumId}/tracks`);
    // const request = axios.get(`http://127.0.0.1:8080/tracks.json`);
    return {
        type: actionNames.GET_TRACKS,
        albumId: albumId,
        payload: request
    };
}

export function getTracksSuccess(response) {
    return {
        type: actionNames.GET_TRACKS_OK,
        payload:  response.data
    };
}

export function getTracksFailure(error,) {
    return {
        type: actionNames.GET_TRACKS_FAIL,
        payload: error
    };
}

export function resetSelectAlbum() {
    return {
        type: actionNames.RESET_ALBUM
    }
}
