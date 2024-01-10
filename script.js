const allImagesContainer = document.querySelector(".all_images")
const images = document.querySelectorAll("img");
const backBtn = document.querySelector(".btn-back")
const nextBtn = document.querySelector(".btn-next")
const allImgIndexes = images.length - 1;

let imgIndex = 0;

backBtn.addEventListener("click", () => {
    if(imgIndex == 0) {
        imgIndex = allImgIndexes;
    }else{
        imgIndex--;
    }
    changeImage()
})

nextBtn.addEventListener("click", () => {
    if(imgIndex >= allImgIndexes) {
        imgIndex = 0;
    }else{
        imgIndex++;
    }
    changeImage()
})

const changeImage = () => {
    const img = document.querySelector(`img[value-index='${imgIndex}']`);
    const imgWidth = img.getBoundingClientRect().width;
    let value = imgWidth * imgIndex;
    allImagesContainer.style.transform = "translateX(" + (-value) + "px)"
}