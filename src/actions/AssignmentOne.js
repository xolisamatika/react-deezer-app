
import axios from 'axios';

const API_URL = 'https://api.deezer.com';
export  const actionNames = {
    GET_ARTISTS: 'GET_ARTISTS',
    GET_ARTISTS_OK: 'GET_ARTISTS_OK',
    GET_ARTISTS_FAIL: 'GET_ARTISTS_FAIL',
    GET_ALBUMS: 'GET_ALBUMS',
    GET_ALBUMS_OK: 'GET_ALBUMS_OK',
    RESET_ARTIST: 'RESET_ARTIST'
};

export async function getArtists(searchText) {
    const request = axios.get(`${API_URL}/search/artist?q=${searchText}`);
    // const request = axios.get(`http://127.0.0.1:8080/artists.json`);
    return {
        type: actionNames.GET_ARTISTS,
        searchText: searchText,
        payload: request
    };
}

export function getArtistsSuccess(response) {
    return {
        type: actionNames.GET_ARTISTS_OK,
        payload:  response.data
    };
}

export function getArtistsFailure(error,) {
    return {
        type: actionNames.GET_ARTISTS_FAIL,
        payload: error
    };
}


export function resetArtist() {
    return {
        type: actionNames.RESET_ARTIST
    }
}