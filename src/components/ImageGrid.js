import React, { useEffect, useState } from 'react';

function ImageGrid() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imageUrls = [];
      for (let i = 0; i < 12; i++) {
        imageUrls.push(`https://picsum.photos/350?random=${i}`);
      }
      setImages(imageUrls);
    };
    fetchImages();
  }, []);

  const getColumnClass = () => {
    if (window.innerWidth > 800) return 'col-3';
    if (window.innerWidth > 500) return 'col-4';
    return 'col-6';
  };

  return (
<div className="row">
 {images.map((image, index) => (
 <div className={`${getColumnClass()}`} key={index} mb-4 position-relative>
  <img alt={`Random ${index + 1}`} className="post-img" src={image}/>
  {index === 2 &&
  <i className="fas fa-play-circle play-icon">
  </i>
  }
 </div>
 ))}
</div>
);
}

export default ImageGrid;