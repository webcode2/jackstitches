import React from "react";
import { Gallery } from "react-grid-gallery";

const pic2 =
  "https://i.pinimg.com/originals/24/11/60/241160dd32c426a6c1db0225673870cc.jpg";
const pic3 =
  "https://i.pinimg.com/originals/ee/91/9f/ee919f1e7bc49d0776c548b434cd81e0.jpg";

const pic1 =
  "https://i.pinimg.com/originals/93/ea/1e/93ea1eb7b76fbad7e47290251b75a328.jpg";

const pic4 =
  "https://i.pinimg.com/originals/70/46/1a/70461ac30d744db42d6763b155e84276.jpg";
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
    height: 500,
  },
  {
    src: pic4,
    width: 220,
    height: 320,
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
    width: 250,
    height: 380,
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
    margin={20}
    onSelect={(img) => alert(img)}
    images={images}
  />
);

export default Gallary;
