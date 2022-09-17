import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const createGalleryItem = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML("afterbegin", createGalleryItem);

galleryRef.addEventListener("click", onGalleryItemClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" data-href="${original}" target="_blank">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

function onGalleryItemClick(e) {
  const galleryItem = e.target.classList.contains("gallery__item");
  if (!galleryItem) {
    return;
  }

  const itemSource = e.target.dataset.source;

  createSimpleLigthBoxItem(itemSource);
}
