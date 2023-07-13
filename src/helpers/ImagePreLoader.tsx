export type IImageType = {
  imageUrls: string[];
  url: string;
};

import React from "react";

const ImagePreLoader = ({ imageUrls}:IImageType) => {
  React.useEffect(() => {
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [imageUrls]);

  return null;
};

export default ImagePreLoader;
