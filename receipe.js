let sidebar = document.getElementById("sidebar");
let overlay = document.getElementById("overlay");
let body = document.getElementById("body");

function openNav() {
  sidebar.classList.add("active");
  overlay.classList.add("active");
  body.style.overflow = "hidden";
}

function closeBtn() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  body.style.overflow = "auto";
}

//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = () => {
  filterItem.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains("item")) {
      filterItem.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active");
      let filterName = selectedItem.target.getAttribute("data-name");
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name");

        if (filterImges == filterName || filterName == "all") {
          image.classList.remove("hide");
          image.classList.add("show");
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  };
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)");
  }
};
//fullscreen image preview function
//selecting all required elements
// const previewBox = document.querySelector(".preview-box"),
//   categoryName = previewBox.querySelector(".title p"),
//   previewImg = previewBox.querySelector("img"),
//   closeIcon = previewBox.querySelector(".icon"),
//   shadow = document.querySelector(".shadow");
// function preview(element) {
//   document.querySelector("body").style.overflow = "hidden";
//   let selectedPrevImg = element.querySelector("img").src;
//   let selectedImgCategory = element.getAttribute("data-name");
//   previewImg.src = selectedPrevImg;
//   categoryName.textContent = selectedImgCategory;
//   previewBox.classList.add("show");
//   shadow.classList.add("show");
//   closeIcon.onclick = () => {
//     previewBox.classList.remove("show");
//     shadow.classList.remove("show");
//     document.querySelector("body").style.overflow = "auto";
//   };
// }
