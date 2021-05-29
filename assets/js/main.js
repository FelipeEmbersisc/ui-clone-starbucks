const imageSlider = (image) => {
  document.querySelector(".starbucks").src = image;
};

const changeCircleColor = (color) => {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
};
