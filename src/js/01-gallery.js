// Add imports above this line
import { galleryItems } from './gallery-items';
console.log(galleryItems);
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import makeGalleryMarkup from '../js/markup-gallery';

const galleryBoxRef = document.querySelector('.gallery');

const addPictureElements = galleryItems.map(makeGalleryMarkup).join('');

galleryBoxRef.innerHTML = addPictureElements;

galleryBoxRef.addEventListener('click', onImgShow);

function onImgShow(e) {
  e.preventDefault();
  const target = e.target;

  if (target.nodeName !== 'IMG') {
    return;
  }

  const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
  });
}
