import React from "react";
import ImageList from "./images";
import PageTemplate from "../_components/PageTemplate";
import CardGallery from "../_components/CardGallery";

const Gallery = () => (
  <PageTemplate title="Gallery">
    <CardGallery items={ImageList} />
  </PageTemplate>
);

export default Gallery;
