import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createdGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createdGallery(img) {
  return img
    .map(({ preview, original, description }) => {
      return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a> 
        `;
    })
    .join('');
}
new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  captionSelector: 'img',
});
