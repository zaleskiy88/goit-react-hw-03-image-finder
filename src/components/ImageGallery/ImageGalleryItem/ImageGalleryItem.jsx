import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { GalleryItem, GalleryItemImg, Modal } from 'index';

export class ImageGalleryItem extends Component {
  state = { ismodalOpen: false };

  modalToggler = () => {
    this.setState(({ ismodalOpen }) => ({ ismodalOpen: !ismodalOpen }));
  };

  render() {
    const { previewImg, fullImage } = this.props;
    const { ismodalOpen } = this.state;

    return (
      <GalleryItem>
        <GalleryItemImg
          src={previewImg}
          alt="Gallery image"
          onClick={this.modalToggler}
        />

        {ismodalOpen && (
          <Modal fullImage={fullImage} onClose={this.modalToggler} />
        )}
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  fullImage: PropTypes.string.isRequired,
  previewImg: PropTypes.string.isRequired,
};
