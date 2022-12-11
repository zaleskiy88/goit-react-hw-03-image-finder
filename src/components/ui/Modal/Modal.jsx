import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Overlay, ModalImg } from 'index';

export class Modal extends Component {
  keyDownHandler = evt => {
    const { onClose } = this.props;

    if (evt.code === 'Escape') {
      onClose();
    }
  };

  componentDidMount = () => {
    window.addEventListener('keydown', this.keyDownHandler);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.keyDownHandler);
  };

  render() {
    const { fullImage, onClose } = this.props;

    return (
      <Overlay onClick={() => onClose()}>
        <ModalImg>
          <img src={fullImage} alt="Gallery img" />
        </ModalImg>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  fullImage: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
