
import axios from 'axios';

const API_URL = 'https://api.deezer.com';
export  const actionNames = {
    GET_ALBUMS: 'GET_ALBUMS',
    GET_ALBUMS_OK: 'GET_ALBUMS_OK',
    GET_ALBUMS_FAIL: 'GET_ALBUMS_FAIL',
    RESET_ALBUM: 'RESET_ALBUM'
};

export async function getAlbums(albumId) {
    // const request = axios.get(`${ROOT_URL}/search/artist?q=${searchTerm}`);
    const request = axios.get(`http://127.0.0.1:8080/tracks.json`);
    return {
        type: actionNames.GET_ALBUMS,
        albumId: albumId,
        payload: request
    };
}

export function getAlbumsSuccess(response) {
    return {
        type: actionNames.GET_ALBUMS_OK,
        payload:  response.data
    };
}

export function getAlbumFailure(error,) {
    return {
        type: actionNames.GET_ALBUMS_FAIL,
        payload: error
    };
}

export function resetSelectArtist() {
    return {
        type: actionNames.RESET_ALBUM

    }
}
