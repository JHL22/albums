import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

// Class component
class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.json())
    .then((responseData) => this.setState({ albums: responseData }));
  }

  // Render all the albums that was fetched from the API.
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  // Render the component
  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
