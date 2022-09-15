import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const createGalleryItem = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML("afterbegin", createGalleryItem);

galleryRef.addEventListener("click", onItemClick);

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

function onItemClick(e) {
  const galleryItem = e.target.classList.contains("gallery__image");
  if (!galleryItem) {
    return;
  }

  LigthBoxItem(e.target.dataset.source);
}

function LigthBoxItem(itemSource) {
  const showLigthBoxItem = basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${itemSource}">
	`,
      {
        onShow: (LigthBoxItem) => {
          window.addEventListener("keydown", (e) => {
            if (e.code === "Escape") {
              LigthBoxItem.close();
            }
          });
        },
      }
    )
    .show();
}
