import React, { Component } from 'react';
import { pixabayApi } from 'api';
import { PropTypes } from 'prop-types';
import { toast } from 'react-hot-toast';
import { ImageGalleryItem, Gallery, LoadMoreButton, Loader } from 'index';

export class ImageGallery extends Component {
  state = { imagesData: [], page: 1, loading: false };

  getImagesData = async () => {
    const { page } = this.state;
    const { searchQuery } = this.props;

    const imagesData = await pixabayApi
      .get('', {
        params: { page: page, q: searchQuery },
      })
      .then(res => {
        if (res.data.hits.length === 0) {
          toast('There is no images on your query');
        }
        return res.data.hits;
      })
      .catch(e => toast('Something went wrong. Please try again later (: '));

    return imagesData;
  };

  loadMoreHandler = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ loading: true, imagesData: [] });

      this.setState({ imagesData: await this.getImagesData(), loading: false });
    }

    if (prevState.page !== this.state.page) {
      this.setState({ loading: true });

      this.setState({
        imagesData: [...prevState.imagesData, ...(await this.getImagesData())],
        loading: false,
      });
    }
  };

  render() {
    const { imagesData, loading } = this.state;

    return (
      <>
        {imagesData.length > 0 && (
          <Gallery>
            {imagesData.map(item => {
              return (
                <ImageGalleryItem
                  previewImg={item.webformatURL}
                  fullImage={item.largeImageURL}
                  key={item.id}
                />
              );
            })}
          </Gallery>
        )}

        {loading && <Loader />}

        {imagesData.length > 0 && (
          <LoadMoreButton onClick={this.loadMoreHandler} />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};
