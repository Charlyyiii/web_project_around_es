export default class Popup {
    constructor(popupSelector) {
        this._handleEscClose = (event) => {
            if (event.key === "Escape") {
                this.close();
            }
        };
        const popupElement = document.querySelector(popupSelector);
        if (!popupElement) {
            throw new Error(`No se encontró el popup: ${popupSelector}`);
        }
        this._popup = popupElement;
    }
    open() {
        this._popup.classList.add("popup_is-opened");
        document.addEventListener("keydown", this._handleEscClose);
    }
    close() {
        this._popup.classList.remove("popup_is-opened");
        document.removeEventListener("keydown", this._handleEscClose);
    }
    setEventListeners() {
        this._popup.addEventListener("mousedown", (event) => {
            if (event.target === event.currentTarget ||
                event.target.classList.contains("popup__close")) {
                this.close();
            }
        });
    }
}
