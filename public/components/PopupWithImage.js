import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        const image = this._popup.querySelector(".popup__image");
        const caption = this._popup.querySelector(".popup__caption");
        if (!image || !caption) {
            throw new Error("No se encontraron la imagen o el título del popup");
        }
        this._image = image;
        this._caption = caption;
    }
    open(imageSrc, imageCaption) {
        if (imageSrc && imageCaption) {
            this._image.src = imageSrc;
            this._image.alt = imageCaption;
            this._caption.textContent = imageCaption;
        }
        super.open();
    }
}
