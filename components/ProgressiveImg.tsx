import ProgressiveImage from "react-progressive-graceful-image";

type IProgressiveImgProps = {
  image: string;
  placeholder?: string | null;
  width?: string;
  height?: string;
};

export default function ProgressiveImg({
  image,
  placeholder,
  width,
  height,
}: IProgressiveImgProps) {
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
