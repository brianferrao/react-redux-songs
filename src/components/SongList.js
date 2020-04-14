import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    render() {
        const songs = this.props.songs.map( (song) => {
        return (
            <div className="item" key={song.title}>   
                <div className="content">
                    {song.title}
                    <div className="ui right floated">
                        <button className="ui primary button" onClick={() => this.props.selectSong(song)}>Select</button>
                    </div>
                </div>
            </div>
        )});
        return (
            <div className="ui relaxed divided list">{songs}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    };
}

export default connect(mapStateToProps, {selectSong})(SongList);