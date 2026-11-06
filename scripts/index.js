const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

// Funciones generales para abrir y cerrar modales

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

// Elementos del perfil

const editButton = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector("#edit-popup");
const closeButton = editPopup.querySelector(".popup__close");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const nameInput = editPopup.querySelector(".popup__input_type_name");

const jobInput = editPopup.querySelector(".popup__input_type_description");

const formElement = editPopup.querySelector(".popup__form");

// Elementos de las tarjetas

const cardsList = document.querySelector(".cards__list");

const addButton = document.querySelector(".profile__add-button");
const newCardPopup = document.querySelector("#new-card-popup");

const newCardCloseButton = newCardPopup.querySelector(".popup__close");

const newCardForm = newCardPopup.querySelector("#new-card-form");

const cardNameInput = newCardPopup.querySelector(
  ".popup__input_type_card-name",
);

const cardLinkInput = newCardPopup.querySelector(".popup__input_type_url");

// Elementos del modal de imágenes

const imagePopup = document.querySelector("#image-popup");

const imagePopupCloseButton = imagePopup.querySelector(".popup__close");

const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");

// Rellenar el formulario del perfil

function fillProfileForm() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
}

// Abrir modal de edición

function handleOpenEditModal() {
  fillProfileForm();
  openModal(editPopup);
}

// Guardar cambios del perfil

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;

  closeModal(editPopup);
}

// Eventos del modal de edición

editButton.addEventListener("click", handleOpenEditModal);

closeButton.addEventListener("click", function () {
  closeModal(editPopup);
});

formElement.addEventListener("submit", handleProfileFormSubmit);

// Abrir modal de imágenes

function handleImageClick(card) {
  popupImage.src = card.link;
  popupImage.alt = card.name;
  popupCaption.textContent = card.name;

  openModal(imagePopup);
}

// Crear tarjetas dinámicamente

function createCard(card) {
  const cardElement = document.createElement("li");
  cardElement.classList.add("card");

  const cardImage = document.createElement("img");
  cardImage.classList.add("card__image");
  cardImage.src = card.link;
  cardImage.alt = card.name;

  // Abrir imagen ampliada

  cardImage.addEventListener("click", function () {
    handleImageClick(card);
  });

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("card__delete-button");
  deleteButton.type = "button";
  deleteButton.setAttribute("aria-label", "Eliminar tarjeta");

  const cardDescription = document.createElement("div");
  cardDescription.classList.add("card__description");

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card__title");
  cardTitle.textContent = card.name;

  const likeButton = document.createElement("button");
  likeButton.classList.add("card__like-button");
  likeButton.type = "button";
  likeButton.setAttribute("aria-label", "Me gusta");

  // Activar y desactivar Me gusta

  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("card__like-button_is-active");
  });

  // Eliminar tarjeta

  deleteButton.addEventListener("click", function () {
    cardElement.remove();
  });

  cardDescription.append(cardTitle, likeButton);

  cardElement.append(cardImage, deleteButton, cardDescription);

  return cardElement;
}

// Abrir modal para agregar tarjetas

function handleOpenNewCardModal() {
  newCardForm.reset();
  openModal(newCardPopup);
}

// Crear una nueva tarjeta

function handleNewCardFormSubmit(evt) {
  evt.preventDefault();

  const newCard = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };

  const cardElement = createCard(newCard);

  cardsList.prepend(cardElement);

  closeModal(newCardPopup);
}

// Eventos del modal de nuevas tarjetas

addButton.addEventListener("click", handleOpenNewCardModal);

newCardCloseButton.addEventListener("click", function () {
  closeModal(newCardPopup);
});

newCardForm.addEventListener("submit", handleNewCardFormSubmit);

// Cerrar modal de imágenes

imagePopupCloseButton.addEventListener("click", function () {
  closeModal(imagePopup);
});

// Mostrar las seis tarjetas iniciales

initialCards.forEach(function (card) {
  const cardElement = createCard(card);
  cardsList.append(cardElement);

  console.log(card.name);
});
