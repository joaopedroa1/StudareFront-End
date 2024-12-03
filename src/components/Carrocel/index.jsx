// src/components/Carousel/index.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <button className="carousel-button prev" onClick={prevImage}>
                &lt;
            </button>
            <div className="carousel-image">
                <img src={images[currentIndex]} alt="Carousel" />
            </div>
            <button className="carousel-button next" onClick={nextImage}>
                &gt;
            </button>
        </div>
    );
};

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;