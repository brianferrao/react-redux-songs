import React from 'react';
import { connect } from 'react-redux';

const SongDetails = (props) => {
    if(!props.song) {
        return <div>Select a Song</div>;
    }
    return (
        <div>
            <h3>Selected song details :</h3>
            <p> 
                Title: {props.song.title} <br/>
                Artist: {props.song.artist} <br/>
                Year Released: {props.song.yearReleased} <br/>
                Duration: {props.song.duration}
            </p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    };
};

export default connect(mapStateToProps)(SongDetails);