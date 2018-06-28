import React, {Component} from 'react';
import Autocomplete from 'react-autocomplete';

export default class AssignmentOne extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: "",
            selectedArtist: null,
            artists: []
        };

        this.onChange = this.onChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.getArtistName = this.getArtistName.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.retrieveDataAsynchronously = this.retrieveDataAsynchronously.bind(this);
    }

    retrieveDataAsynchronously(searchText){
        let _this = this;

        let url = `https://api.deezer.com/search/artist?q=${searchText}`;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = () => {
            let status = xhr.status;
            if (status === 200) {
                _this.setState({
                    artists: xhr.response.data
                });
            } else {
                console.error("Cannot load data from remote source");
            }
        };

        xhr.send();
    }

    onChange(e){
        this.setState({
            value: e.target.value
        });

        this.retrieveDataAsynchronously(e.target.value);
    }

    onSelect(val, artist){
        this.setState({
            value: val,
            selectedArtist: artist
        });
    }

    renderItem(item, isHighlighted){

        return (
            <div  key={item.id} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.name}
            </div>
        );
    }

    getArtistName(artist){

        return `${artist.name}`;
    }

    render() {
        return (
            <div className="well">
                <div className="col-lg">
                    <div className="input-group">
                        <Autocomplete
                            // className="form-control"
                            getItemValue={this.getArtistName}
                            items={this.state.artists}
                            renderItem={this.renderItem}
                            value={this.state.value}
                            onChange={this.onChange}
                            onSelect={this.onSelect}
                            placehosler='Search here'

                        />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button" onClick={this.props.getAlbums(this.state.selectedArtist)}>Search</button>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}