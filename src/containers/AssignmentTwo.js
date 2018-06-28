import { connect } from 'react-redux'
import AssignmentTwo  from '../components/AssignmentTwo';
import {getAlbums, resetSelectArtist, getAlbumsSuccess, getAlbumFailure}  from '../actions/AssignmentTwo';


function mapStateToProps(state, ownprops) {
    return {
        artistId: state.artistId,
        albums: state.albums
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (artistId) => {
            getAlbums(artistId)
                .then((result) => {
                    dispatch({
                        type: result.type,
                        artistId: result.artistId
                    })

                    result.payload.then(
                        response => dispatch(getAlbumsSuccess(response.data)),
                        errer => dispatch(getAlbumFailure(errer))
                    );
                })
        },
        resetMe: () => {
            dispatch(resetSelectArtist());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AssignmentTwo);