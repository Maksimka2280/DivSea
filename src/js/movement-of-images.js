   // Function to move images to the left
   function moveLeft() {
    const imageContainer = document.getElementById('imageContainer');
    const firstImage = imageContainer.firstElementChild;

    // Move the first image to the end of the container
    imageContainer.appendChild(firstImage);
}

// Function to move images to the right
function moveRight() {
    const imageContainer = document.getElementById('imageContainer');
    const lastImage = imageContainer.lastElementChild;

    // Move the last image to the beginning of the container
    imageContainer.insertBefore(lastImage, imageContainer.firstElementChild);
}