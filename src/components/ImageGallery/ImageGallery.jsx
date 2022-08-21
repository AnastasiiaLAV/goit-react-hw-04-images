import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

const ImageGallery = ({ images}) => {

    return (
        <GalleryList className="gallery">
            {images.map((image) => (
                <ImageGalleryItem key={image.id} {...image} />
            ))}
        </GalleryList>
    );
}

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
};

export default ImageGallery;

