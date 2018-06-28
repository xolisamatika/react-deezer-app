import { connect } from 'react-redux'
import AssignmentThree  from '../components/AssignmentThree';
import {getTracks, resetSelectAlbum, getTracksSuccess, getTracksFailure}  from '../actions/AssignmentThree';


function mapStateToProps(state) {
    return {
        albumId: state.albumId,
        tracks: state.tracks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick : (albumId) => {
            getTracks(albumId)
                .then((result) => {
                    dispatch({
                        type: result.type,
                        albumId: result.albumId
                    })

                    result.payload.then(
                        response => dispatch(getTracksSuccess(response.data)),
                        errer => dispatch(getTracksFailure(errer))
                    );
                })
        },
        resetMe: () => {
            dispatch(resetSelectAlbum());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AssignmentThree);