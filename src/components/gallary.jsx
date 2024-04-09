import React from "react";
import { Gallery } from "react-grid-gallery";
import pic1 from "../assets/images/Group 1926.png";
import pic2 from "../assets/images/fash1.png";
import pic3 from "../assets/images/brand1.png";

const images = [
  {
    src: pic2,
    width: 320,
    height: 412,

    tags: [
      { value: "Fation", title: "Unique" },
      //   { value: "People", title: "People" },
    ],
    alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: pic3,
    width: 320,
    height: 200,
  },
  {
    src: pic1,
    width: 400,
    height: 674,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: pic2,
    width: 320,
    height: 412,

    tags: [
      { value: "Fation", title: "Unique" },
      //   { value: "People", title: "People" },
    ],
    alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: pic3,
    width: 320,
    height: 200,
  },
  {
    src: pic2,
    width: 320,
    height: 412,

    tags: [
      { value: "Fation", title: "Unique" },
      //   { value: "People", title: "People" },
    ],
    alt: "Boats (Jeshu John - designerspics.com)",
  },
];

const Gallary = () => (
  <Gallery
    rowHeight={400}
    maxRows={4}
    enableImageSelection

margin={5}    onSelect={(img) => alert(img)}
    images={images}
    
  />
);

export default Gallary;
