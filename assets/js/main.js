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
  let network = document.querySelector('.network');

  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
  network.classList.toggle('active');
};
