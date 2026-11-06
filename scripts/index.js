// Tarjetas iniciales

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

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

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

function handleImageClick(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;

  openModal(imagePopup);
}

// Controlador del botón Me gusta

function handleLikeButtonClick(evt) {
  evt.currentTarget.classList.toggle("card__like-button_is-active");
}

// Controlador del botón eliminar

function handleDeleteButtonClick(evt) {
  const cardElement = evt.currentTarget.closest(".card");

  cardElement.remove();
}

// Crear un elemento de tarjeta desde el template

function getCardElement(
  name = "Sin título",
  link = "./images/placeholder.jpg",
) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__title");

  const cardImage = cardElement.querySelector(".card__image");

  cardTitle.textContent = name;

  cardImage.src = link;
  cardImage.alt = name;

  // Botón Me gusta

  const likeButton = cardElement.querySelector(".card__like-button");

  likeButton.addEventListener("click", handleLikeButtonClick);

  // Botón eliminar

  const deleteButton = cardElement.querySelector(".card__delete-button");

  deleteButton.addEventListener("click", handleDeleteButtonClick);

  // Abrir imagen ampliada

  cardImage.addEventListener("click", function () {
    handleImageClick(name, link);
  });

  return cardElement;
}

// Insertar una tarjeta en el contenedor

function renderCard(name, link, container) {
  const cardElement = getCardElement(name, link);

  container.prepend(cardElement);
}

// Abrir modal para agregar tarjetas

function handleOpenNewCardModal() {
  newCardForm.reset();

  openModal(newCardPopup);
}

// Crear una nueva tarjeta

function handleNewCardFormSubmit(evt) {
  evt.preventDefault();

  renderCard(cardNameInput.value, cardLinkInput.value, cardsList);

  closeModal(newCardPopup);

  newCardForm.reset();
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

initialCards
  .slice()
  .reverse()
  .forEach(function (card) {
    renderCard(card.name, card.link, cardsList);
  });
