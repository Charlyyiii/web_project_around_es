
interface CardData {
  name: string;
  link: string;
}

export default class Card {
  private _name: string;
  private _link: string;
  private _templateSelector: string;
  private _handleCardClick: (name: string, link: string) => void;
  private _element: HTMLElement | null = null;

  constructor(
    data: CardData,
    templateSelector: string,
    handleCardClick: (name: string, link: string) => void
  ) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  private _getTemplate(): HTMLElement {
    const templateElement = document.querySelector<HTMLTemplateElement>(
      this._templateSelector
    );

    if (!templateElement) {
      throw new Error("No se encontró la plantilla de tarjetas");
    }

    const cardElement = templateElement.content
      .querySelector<HTMLElement>(".card");

    if (!cardElement) {
      throw new Error("No se encontró el elemento .card en la plantilla");
    }

    return cardElement.cloneNode(true) as HTMLElement;
  }

  private _setEventListeners(): void {
    if (!this._element) return;

    const likeButton = this._element.querySelector<HTMLButtonElement>(
      ".card__like-button"
    );

    const deleteButton = this._element.querySelector<HTMLButtonElement>(
      ".card__delete-button"
    );

    const cardImage = this._element.querySelector<HTMLImageElement>(
      ".card__image"
    );

    likeButton?.addEventListener("click", () => {
      likeButton.classList.toggle("card__like-button_is-active");
    });

    deleteButton?.addEventListener("click", () => {
      this._element?.remove();
    });

    cardImage?.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  generateCard(): HTMLElement {
    this._element = this._getTemplate();

    const cardTitle = this._element.querySelector<HTMLElement>(
      ".card__title"
    );

    const cardImage = this._element.querySelector<HTMLImageElement>(
      ".card__image"
    );

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
