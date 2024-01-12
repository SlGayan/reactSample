// YourApp.js
import React from 'react';
import ShareableImage from './ShareableImage';

const YourApp = () => {
  const imageUrl = '../../../logo192.png';
  const imageAlt = 'Image Alt Text';
  const title = 'Your Website Title';
  const description = 'Description of your website';

  return (
    <div>
      <ShareableImage
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        title={title}
        description={description}
      />
      {/* Other components or content */}
    </div>
  );
};

export default YourApp;
