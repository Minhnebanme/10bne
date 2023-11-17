document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    const overlay = item.querySelector(".overlay");
    const overlayImage = item.querySelector(".overlay-image");
    const closeOverlay = item.querySelector(".close-overlay");

    item.addEventListener("click", function () {
      const imageSrc = this.querySelector("img").getAttribute("src");
      showOverlay(imageSrc);
    });

    closeOverlay.addEventListener("click", hideOverlay);

    function showOverlay(imageSrc) {
      overlayImage.src = imageSrc;
      overlay.style.display = "flex";
    }

    function hideOverlay() {
      overlay.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Lấy các phần tử cần sử dụng
  const galleryItems = document.querySelectorAll(".gallery-item");
  const overlay = document.getElementById("overlay");
  const overlayImage = document.getElementById("overlay-image");
  const closeOverlay = document.getElementById("close-overlay");

  // Thêm sự kiện click cho từng gallery item
  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      const imageSrc = this.querySelector("img").getAttribute("src");
      showOverlay(imageSrc);
    });
  });

  // Thêm sự kiện click cho close overlay button
  closeOverlay.addEventListener("click", hideOverlay);

  // Hàm hiển thị overlay
  function showOverlay(imageSrc) {
    overlayImage.src = imageSrc;
    overlay.style.display = "flex";
  }

  // Hàm ẩn overlay
  function hideOverlay() {
    overlay.style.display = "none";
  }
});
