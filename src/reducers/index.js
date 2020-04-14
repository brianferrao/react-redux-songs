import { combineReducers } from 'redux';

const songListReducer = () => {
    return [
        {
            title: 'Slim Shady',
            artist: 'Eminem',
            yearReleased: '2000',
            duration: '4:20'
        },
        {
            title: 'Hero',
            artist: 'Enrique',
            yearReleased: '2004',
            duration: '3:15'
        },
        {
            title: 'New Rules',
            artist: 'Dua Lipa',
            yearReleased: '2019',
            duration: '5:00'
        }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECT') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs : songListReducer,
    selectedSong : selectedSongReducer
});

