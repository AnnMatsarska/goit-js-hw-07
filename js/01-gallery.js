import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');

container.addEventListener('click', onClick);

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join('');

container.insertAdjacentHTML('beforeend', markup);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    return;
  }
  const instance = basicLightbox.create(`
   <img src="${evt.target.dataset.source}" width="800" height="600"> `);

  instance.show();
}

container.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    instance.close();
  }
});
