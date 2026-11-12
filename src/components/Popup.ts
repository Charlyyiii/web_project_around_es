
export default class Popup {
  protected _popup: HTMLElement;
  private _handleEscClose = (event: KeyboardEvent): void => {
    if (event.key === "Escape") {
      this.close();
    }
  };

  constructor(popupSelector: string) {
    const popupElement = document.querySelector<HTMLElement>(popupSelector);

    if (!popupElement) {
      throw new Error(`No se encontró el popup: ${popupSelector}`);
    }

    this._popup = popupElement;
  }

  open(): void {
    this._popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close(): void {
    this._popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListeners(): void {
    this._popup.addEventListener("mousedown", (event: MouseEvent) => {
      if (
        event.target === event.currentTarget ||
        (event.target as HTMLElement).classList.contains("popup__close")
      ) {
        this.close();
      }
    });
  }
}
