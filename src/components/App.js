import React from 'react';
import SongList from './SongList';
import SongDetails from './SongDetails';

class App extends React.Component {
    render() {
        return (
            <div className="ui grid container">
                <div className="ui row">
                    <div className="eight wide column">
                        <SongList></SongList>
                    </div>
                    <div className="eight wide column">
                        <SongDetails></SongDetails>
                    </div>                      
                </div>                
            </div>
        );
    }
}

export default App;