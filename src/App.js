import "./App.css";
import SearchHeader from "./SearcHeader";
import searchImages from "./api";
import { useState } from "react";
import ImageList from "./components/imageList";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className="App">
      <SearchHeader Search={handleSubmit} />
      <ImageList imagesPlaceholder={images} />
    </div>
  );
}

export default App;
