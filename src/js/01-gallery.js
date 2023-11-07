import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryItemsEl = galleryItems.map(galleryItemsInfo => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${galleryItemsInfo.original}">
          <img
          class="gallery__image"
          src="${galleryItemsInfo.preview}"
          alt="${galleryItemsInfo.description}" 
          />
      </a>
    </li>
  `;
});

galleryEl.insertAdjacentHTML('afterbegin', galleryItemsEl.join(''));

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
