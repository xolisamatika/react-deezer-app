import { connect } from 'react-redux'
import AssignmentOne  from '../components/AssignmentOne';
// import {getArtists, resetArtist, getArtistsSuccess, getArtistsFailure}  from '../actions/AssignmentOne';

import {getAlbums, resetSelectArtist, getAlbumsSuccess, getAlbumFailure}  from '../actions/AssignmentTwo';

function mapStateToProps(state) {
    return {
        searchText: state.searchText,
        artists: state.artists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // handleChange: (searchText) => {
        //     getArtists(searchText)
        //     .then((result) => {
        //         dispatch({
        //             type: result.type,
        //             searchText: result.searchText
        //         })
        //
        //         result.payload.then(
        //             response => dispatch(getArtistsSuccess(response.data)),
        //             errer => dispatch(getArtistsFailure(errer))
        //         );
        //     })
        // },
        // onSelect: (searchText) => {
        //     console.log(searchText);
        //     // dispatch(selectArtist(response.data));
        // },
        //
        getAlbums: (artistId) => {
            console.log(artistId);
            getAlbums(artistId)
                .then((result) => {
                    dispatch({
                        type: result.type,
                        artistId: result.artistId
                    })

                    result.payload.then(
                        response => dispatch(getAlbumsSuccess(response.data)),
                        error => dispatch(getAlbumFailure(error))
                    );
                })
        },
        // // searchArtists: event => dispatch(getArtists(event.target.value)),
        // // getArtistName(artist){
        // //     // state.selectArtist = artist;
        // //     return `${artist.name}`;
        // // },
        // resetMe: () => {
        //     dispatch(resetSelectArtist());
        // }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AssignmentOne);