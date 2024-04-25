import React, { useEffect, useState } from "react";
import Masonry from "react-responsive-masonry";

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
    src: "https://i.pinimg.com/236x/79/8a/f5/798af5f496cc6b03eccdc0ad8b740086.jpg",
    width: 320,
    height: 412,
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

const Gallary = () => {
  const [width, setWith] = useState(window.innerWidth);
  function setwidth(width) {
    setWith(width);
  }

  useEffect(() => {
    window.addEventListener("resize", () => setwidth(window.innerWidth));
  }, []);
  console.log(width);
  return (
    <Masonry className="px-1" 
    columnsCount={width <= 1025 ? 2 : 3}
    // columnsCountBreakPoints={{400: 1, 750: 2, 1020: 3}}
    gutter="10px">
      {images.map((image, i) => (
        <img
          key={i}
          src={image.src}
          alt={i}
          style={{ width: "100%", display: "block" }}
        />
      ))}
    </Masonry>
  );
};

export default Gallary;
