var images = [
  "https://i.pinimg.com/564x/0d/ae/85/0dae851509f76849cca5568eb769e685.jpg",
  "https://i.pinimg.com/736x/47/44/dc/4744dc11dbfa0a344f64899123e3bfa5.jpg",
  "https://i.pinimg.com/736x/29/a0/04/29a0045de23c064bfbc70c2c2cd1531d.jpg",
  // Thêm nhiều hình ảnh khác ở đây
];
var currentIndex = 0;

function openLightbox() {
  document.getElementById("lightbox").style.display = "flex";
  showImage();
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function showImage() {
  document.getElementById("lightbox-image").src = images[currentIndex];
}

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  showImage();
}
