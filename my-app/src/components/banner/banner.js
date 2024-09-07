import React from 'react';
import './banner.css'; 
import Button from '../resuable-components/button';

const Banner = ({ title, subtitle, image, altText }) => {
  return (
    <div className="banner">
      {image && (
        <div className="banner-image hero-slider-2xl hero-slider-md hero-slider-sm">
          <img src={image} alt={altText || 'Banner Image'} />
        </div>
      )}
      <div className="banner-content">
        <h1 className="banner-title">{title}</h1>
        {subtitle && <p className="banner-subtitle">{subtitle}</p>}
        <Button
          label="Contact-us"
          className="button-banner"
        />
      </div>
    </div>
  );
};

export default Banner;