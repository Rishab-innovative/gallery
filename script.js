const images = [
  "img0.jpeg",
  "img1.jpeg",
  "img2.jpeg",
  "img3.jpeg",
  "img4.jpeg",
  "img5.jpeg",
  "img6.jpeg",
  "img7.jpeg",
  "img8.jpeg",
  "img9.jpeg",
  "img10.jpeg",
  "img11.jpeg",
];
let counter = 0;
const pre = document.getElementById("prev");
const next = document.getElementById("next");
const selector = document.getElementById("img-container");
const shadow = document.getElementById("shadow");
const popContainer = document.querySelector(".popup-container");

images.map((element, index) => {
  const newElement = document.createElement("img");
  newElement.src = element;
  newElement.id = index;
  newElement.className = "singleImage";
  newElement.onclick = function () {
    pop(index);
  };
  selector.appendChild(newElement);
});

function pop(data) {
  counter = data;
  document.getElementById("popup-image").src = `img${data}.jpeg`;
  popContainer.style.display = "block";
  shadow.style.display = "block";
  console.log("--->", counter);

  counter ? (pre.style.display = "block") : (pre.style.display = "none");
  counter == images.length - 1
    ? (next.style.display = "none")
    : (next.style.display = "block");
}

shadow.addEventListener("click", function () {
  popContainer.style.display = "none";
  shadow.style.display = "none";
});

pre.addEventListener("click", function () {
  if (counter) {
    counter--;
    pop(counter);
  }
});

next.addEventListener("click", function () {
  if (counter < images.length - 1) {
    counter++;
    pop(counter);
  }
});
