import React from 'react';

const MyImageComponent = () => {
  const imageUrl = '../../../robo.webp';
  return (
    <div>
      <h2>Image Component</h2>
      <img src={imageUrl} alt="Description of the image" />
    </div>
  );
};

export default MyImageComponent;
