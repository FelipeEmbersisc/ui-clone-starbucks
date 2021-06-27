const imageSlider = (image) => {
  document.querySelector('.starbucks').src = image;
};

const changeCircleColor = (color) => {
  const circle = document.querySelector('.circle');
  circle.style.background = color;
};

const toggleMenu = () => {
  let menuToggle = document.querySelector('.toggle');
  let navigation = document.querySelector('.navigation');

  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
};
