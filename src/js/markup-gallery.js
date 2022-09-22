export default function makeGalleryMarkup({ preview, original, description }) {
  return `
     <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="" title="${description}" />
    </a> `;
}
