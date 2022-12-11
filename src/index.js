import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';

export * from 'api';
export * from 'components/Searchbar/Searchbar';
export * from 'components/Searchbar/Searchbar.styled';
export * from 'components/ui/Container.styled';
export * from 'components/ImageGallery/ImageGallery';
export * from 'components/ImageGallery/ImageGallery.styled';
export * from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
export * from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem.styled';
export * from 'components/ui/LoadMoreButon/LoadMoreButton';
export * from 'components/ui/LoadMoreButon/Button.styled';
export * from 'components/ui/Modal/Modal';
export * from 'components/ui/Modal/Modal.styled';
export * from 'components/ui/Loader/Loader';
export * from 'components/ui/Loader/Loader.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
