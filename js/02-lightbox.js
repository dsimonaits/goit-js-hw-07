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
      return `
        <div class="gallery__item">
          <a class="gallery__link" data-href="${original}" target="_blank">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>`;
    })
    .join("");
}

function onGalleryItemClick(e) {
  const galleryItem = e.target.classList.contains("gallery__image");
  if (!galleryItem) {
    return;
  }

  const itemSource = e.target.dataset.source;

  createLigthBoxItem(itemSource);
}
