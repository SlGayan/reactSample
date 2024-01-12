// ShareableImage.js
import React from 'react';
import { Helmet } from 'react-helmet';

const ShareableImage = ({ imageUrl, imageAlt, title, description }) => {
  return (
    <div>
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content={imageAlt} />
      </Helmet>

      <h1>{title}</h1>
      <img src={imageUrl} alt={imageAlt} />
      <p>{description}</p>
    </div>
  );
};

export default ShareableImage;
