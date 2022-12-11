import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { SearchBar, Container, ImageGallery } from 'index';

export class App extends Component {
  state = { query: '' };

  handleSubmit = searchQuery => {
    this.setState({ query: searchQuery });
  };

  render() {
    return (
      <Container>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery searchQuery={this.state.query} />

        <Toaster position="top-right" />
      </Container>
    );
  }
}
