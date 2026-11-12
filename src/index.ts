import Card from "./components/Card.js";
import Section from "./components/Section.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInfo.js";
import FormValidator from "./components/FormValidator.js";
import { defaultFormConfig } from "./utils/constants.js";

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

// Información del perfil
const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

// Popup de imágenes
const imagePopup = new PopupWithImage("#image-popup");
imagePopup.setEventListeners();

// Contenedor de tarjetas
const cardsSection = new Section(
  {
    items: [...initialCards].reverse(),
    renderer: (item) => {
      const card = new Card(
        item,
        "#card-template",
        (name, link) => {
          imagePopup.open(link, name);
        }
      );

      return card.generateCard();
    },
  },
  ".cards__list"
);

// Renderizar tarjetas iniciales
cardsSection.renderItems();

// Popup para editar el perfil
const editPopup = new PopupWithForm(
  (inputValues) => {
    userInfo.setUserInfo({
      name: inputValues.profileName,
      job: inputValues.profileDescription,
    });

    editPopup.close();
  },
  "#edit-popup"
);

editPopup.setEventListeners();

// Popup para agregar tarjetas
const newCardPopup = new PopupWithForm(
  (inputValues) => {
    const card = new Card(
      {
        name: inputValues.cardName,
        link: inputValues.cardImageUrl,
      },
      "#card-template",
      (name, link) => {
        imagePopup.open(link, name);
      }
    );

    cardsSection.addItem(card.generateCard());
    newCardPopup.close();
  },
  "#new-card-popup"
);

newCardPopup.setEventListeners();

// Botones para abrir los popups
const editButton = document.querySelector<HTMLButtonElement>(
  ".profile__edit-button"
);

const addButton = document.querySelector<HTMLButtonElement>(
  ".profile__add-button"
);

if (!editButton || !addButton) {
  throw new Error("No se encontraron los botones del perfil");
}

// Abrir popup de edición
editButton.addEventListener("click", () => {
  const profileData = userInfo.getUserInfo();

  const nameInput = document.querySelector<HTMLInputElement>(
    "#profile-name"
  );

  const descriptionInput = document.querySelector<HTMLInputElement>(
    "#profile-description"
  );

  if (!nameInput || !descriptionInput) {
    throw new Error("No se encontraron los campos del perfil");
  }

  nameInput.value = profileData.name;
  descriptionInput.value = profileData.job;

  editValidator.resetValidation();
  editPopup.open();
});

// Abrir popup de nuevas tarjetas
addButton.addEventListener("click", () => {
  newCardValidator.resetValidation();
  newCardPopup.open();
});

// Validación del formulario del perfil
const profileForm = document.querySelector<HTMLFormElement>(
  "#profile-form"
);

const newCardForm = document.querySelector<HTMLFormElement>(
  "#new-card-form"
);

if (!profileForm || !newCardForm) {
  throw new Error("No se encontraron los formularios");
}

const editValidator = new FormValidator(
  defaultFormConfig,
  profileForm
);

const newCardValidator = new FormValidator(
  defaultFormConfig,
  newCardForm
);

editValidator.enableValidation();
newCardValidator.enableValidation();
