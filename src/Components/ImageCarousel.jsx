import React, { useState, useEffect } from "react";
import lg1 from "../../public/assets/clothes3.jpg"
import lg2 from "../../public/assets/clothes2.jpg";
import lg3 from "../../public/assets/clothes.jpg";



const images = [lg1, lg2, lg3];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [length]);

  return (
    <div className="border-2 border-black">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-[80vh] object-fit transition-all duration-700"
      />
    </div>
  );
}


