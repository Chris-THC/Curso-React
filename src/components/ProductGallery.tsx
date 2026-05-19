import React from "react";

interface PropsImg {
  srcPath: string;
}

export const ProductGallery: React.FC<PropsImg> = ({ srcPath }) => {
  return (
    <div className="product-gallery">
      <img src={srcPath} alt="Producto" className="main-img" />
    </div>
  );
};
