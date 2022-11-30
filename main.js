var imageUrls = [];
var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');
var $gallery = document.querySelector('main');

$addImageButton.addEventListener('click', function () {
  if ($imageUrlInput !== '') {
    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updatedGallery();
  }
});

function updatedGallery() {
  $gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}

updatedGallery();
