import React, {Component} from 'react';

export default class AssignmentThree extends Component {
    componentWillMount() {
        let t = this.props.getAlbums;
        console.log(t);
    }

    render() {
        const {artist, getAlbums, searchArtists} = this.props
        return (
            <div className="well">
                <div className="col-lg">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search here" onChange={searchArtists} />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button" onClick={getAlbums}>Search</button>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}