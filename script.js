const API_KEY = window.env.PIXABAY_API_KEY;
const searchForm = document.getElementById("search-form");
const searchQuery = document.getElementById("search-query");
const gallery = document.getElementById("gallery");
const header = document.querySelector("header");
const imageModal = document.querySelector(".image-modal");
const modalContent = document.querySelector(".modal-content");

searchForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  gallery.innerHTML = "";
  const query = searchQuery.value.trim();
  if (query !== "") {
    searchImages(query);
    // Ne masque plus le formulaire après la recherche
    // header.style.display = "none";
    searchQuery.blur(); // Retire le focus de la barre de recherche
  }
}

function searchImages(query) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.hits.length > 0) {
        data.hits.forEach((image) => {
          const thumbnail = createImageThumbnail(image);
          gallery.appendChild(thumbnail);
        });
      } else {
        const message = document.createElement("p");
        message.textContent = "Aucune image trouvée.";
        gallery.appendChild(message);
      }
    })
    .catch((error) => {
      console.log("Erreur lors de la récupération des images :", error);
    });
}

function createImageThumbnail(image) {
  const thumbnail = document.createElement("img");
  thumbnail.src = image.webformatURL;
  thumbnail.alt = image.tags;
  thumbnail.classList.add("image-thumbnail");

  thumbnail.addEventListener("click", () => openImageModal(image));

  return thumbnail;
}

function openImageModal(image) {
  modalContent.src = image.largeImageURL;
  imageModal.classList.add("active");
}

imageModal.addEventListener("click", () => {
  imageModal.classList.remove("active");
  modalContent.src = "";
});

modalContentContainer.addEventListener("click", (e) => {
  e.stopPropagation();
});
