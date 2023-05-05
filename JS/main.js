let images = document.querySelector(".landing .images");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let bulletsParent = document.querySelector(".circleIcons");
let imagesNumber = images.children;
let imageWidth = 0;

for (let i = 0; i < imagesNumber.length; i++) {
  let bullet = document.createElement("div");
  bullet.classList.add(`bullet-${i + 1}`);
  bulletsParent.appendChild(bullet);
}
let bullets = document.querySelectorAll(".circleIcons div");
let bulletsArray = Array.from(bullets);

document.querySelector(".bullet-1").classList.add("active");

function activeBullet(imageWidth) {
  bulletsArray.forEach((bullet) => {
    bullet.classList.remove("active");
  });
  if (imageWidth == 0) {
    document.querySelector(".bullet-1").classList.add("active");
  } else if (imageWidth == 100) {
    document.querySelector(".bullet-2").classList.add("active");
  } else if (imageWidth == 200) {
    document.querySelector(".bullet-3").classList.add("active");
  }
}

next.addEventListener("click", function () {
  imageWidth += 100;
  images.style.transform = `translateX(-${imageWidth}vw)`;
  activeBullet(imageWidth);
  if (imageWidth == 200) {
    imageWidth = -100;
  }
});
prev.addEventListener("click", function () {
  if (imageWidth == -100) {
    imageWidth = 200;
  }
  if (imageWidth == 0) {
    imageWidth = 300;
  }
  imageWidth -= 100;
  images.style.transform = `translateX(-${imageWidth}vw)`;
  activeBullet(imageWidth);
});
