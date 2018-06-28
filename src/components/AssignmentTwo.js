import React, {Component} from 'react';

export default class AssignmentTwo extends Component {
    componentWillMount() {
    }

    SearchResults(props) {
        const results = this.props.results;
        if (true) {
            return  this.renderAlbumsFound(results)
        }
        return this.renderAlbumsNotFound();
    }

    render() {
        const {artistName, albums, searchArtists} = this.props
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Search results for "{artistName}"</h3>
                </div>
                {this.renderAlbumsFound(this.props)}
            </div>
        );
    }

    renderAlbumsFound(props) {
        return (
                <div className="panel-body">
                    <div className="row">
                        <div className="col-xs-6 col-md-3">
                            <a className="thumbnail" onClick={this.props.onClick}>
                                <img src="..." alt="..." />
                            </a>
                        </div>
                        ...
                    </div>
                </div>
        );
    }

    renderAlbumsNotFound() {
        return <h1>No albums found.</h1>;
    }
}