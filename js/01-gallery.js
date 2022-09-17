import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const createGalleryItem = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML("afterbegin", createGalleryItem);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" data-href="${original}">
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

galleryRef.onclick = (e) => {
  const galleryItemSource = e.target.dataset.source;
  const newLightbox = basicLightbox.create(
    `
		<img width="1400" height="900" src="${galleryItemSource}">
	`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscKeyPress);
      },

      onClose: () => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );
  newLightbox.show();

  function onEscKeyPress(e) {
    if (e.code === "Escape") {
      newLightbox.close();
    }
  }
};
