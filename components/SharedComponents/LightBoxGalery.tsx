import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import { useState, useEffect } from "react";

interface recivedData {
  images: string[];
  start_position: number;
  start: boolean;
}

export const LightBoxGalery: React.FC<recivedData> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState<number>(-1);
  useEffect(() => {
    if (props.start_position === -1) {
      return;
    }
    setIsOpen(true);
    setPhotoIndex(props.start_position);
  }, [props.start]);

  return (
    <div>
      {isOpen && (
        <Lightbox
          mainSrc={props.images[photoIndex]}
          nextSrc={props.images[(photoIndex + 1) % props.images.length]}
          prevSrc={props.images[(photoIndex + props.images.length - 1) % props.images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => {
            setPhotoIndex((photoIndex + props.images.length - 1) % props.images.length);
          }}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % props.images.length)}
        />
      )}
    </div>
  );
};
