export default class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._element = null;
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }
    _getTemplate() {
        const templateElement = document.querySelector(this._templateSelector);
        if (!templateElement) {
            throw new Error("No se encontró la plantilla de tarjetas");
        }
        const cardElement = templateElement.content
            .querySelector(".card");
        if (!cardElement) {
            throw new Error("No se encontró el elemento .card en la plantilla");
        }
        return cardElement.cloneNode(true);
    }
    _setEventListeners() {
        if (!this._element)
            return;
        const likeButton = this._element.querySelector(".card__like-button");
        const deleteButton = this._element.querySelector(".card__delete-button");
        const cardImage = this._element.querySelector(".card__image");
        likeButton === null || likeButton === void 0 ? void 0 : likeButton.addEventListener("click", () => {
            likeButton.classList.toggle("card__like-button_is-active");
        });
        deleteButton === null || deleteButton === void 0 ? void 0 : deleteButton.addEventListener("click", () => {
            var _a;
            (_a = this._element) === null || _a === void 0 ? void 0 : _a.remove();
        });
        cardImage === null || cardImage === void 0 ? void 0 : cardImage.addEventListener("click", () => {
            this._handleCardClick(this._name, this._link);
        });
    }
    generateCard() {
        this._element = this._getTemplate();
        const cardTitle = this._element.querySelector(".card__title");
        const cardImage = this._element.querySelector(".card__image");
        if (!cardTitle || !cardImage) {
            throw new Error("Faltan elementos necesarios en la tarjeta");
        }
        cardTitle.textContent = this._name;
        cardImage.src = this._link;
        cardImage.alt = this._name;
        this._setEventListeners();
        return this._element;
    }
}
