import ProgressiveImage from "react-progressive-graceful-image";
import { ProgressiveImgTypes } from "../@types/types";

export default function ProgressiveImg({
  image,
  placeholder,
  width,
  height,
}: ProgressiveImgTypes) {
  return (
    <ProgressiveImage src={image} placeholder={placeholder}>
      {(src, loading) => (
        <img
          style={{ padding: "10px", objectFit: "contain" }}
          className={`image${loading ? " loading" : " loaded"}`}
          src={src}
          width={width}
          height={height}
        />
      )}
    </ProgressiveImage>
  );
}
