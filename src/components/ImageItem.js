function ImageItem({ image }) {
  console.log(image);
  return (
    <div>
      <img
        className="ImageListImg"
        src={image.urls.small}
        alt={image.alt_descripton}
      />
    </div>
  );
}

export default ImageItem;
