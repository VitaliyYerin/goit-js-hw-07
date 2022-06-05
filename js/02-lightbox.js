import {galleryItems} from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const galleryElements = createGallery(galleryItems);
galleryList.insertAdjacentHTML('afterbegin', galleryElements);
galleryList.addEventListener('click', onGallery);
const gallery = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: 'alt', docClose: true});

function createGallery(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}" onclick = "event.preventDefault()">
                <img 
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
                </a>`;
    })
        .join('');
}

function onGallery(e) {
    e.stopPropagation();

    if (gallery) {
        gallery.show(e.target.closest('a'));
    }
}

