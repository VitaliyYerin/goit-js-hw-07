import {galleryItems} from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');
const galleryElements = createGallery(galleryItems);
let galleryPopup;

galleryList.insertAdjacentHTML('afterbegin', galleryElements);
galleryList.addEventListener('click', onGallery);

function createGallery(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item"> 
                <a class="gallery__link" href="${original}">
                <img 
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
                </a>
                </div>`;
    })
        .join('');
}

function handleModalClose(e) {
    if (e.code === 'Escape' && galleryPopup) {
        galleryPopup.close();
        window.removeEventListener('keydown', handleModalClose);
        galleryPopup = null;
    }
}

function onGallery(e) {
    e.preventDefault();
    galleryPopup = basicLightbox.create(`<img src="${e.target.dataset.source}" alt="${e.target.alt}"/>`, {
        // closable: false,
    });
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
    galleryPopup.show();

    document.addEventListener('keydown', handleModalClose);
}