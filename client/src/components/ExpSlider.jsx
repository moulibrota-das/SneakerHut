import React from "react";
import { sliderItems } from "../data";

export default function ExpSlider() {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner relative w-full overflow-hidden">
        {sliderItems.map((item) => (
          <div
            class="carousel-item active relative float-left w-full"
            key={item.id}
          >
            <img src={item.img} class="block w-full" alt={item.id} />
          </div>
        ))}
      </div>
      <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
