import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  private _image: HTMLImageElement;
  private _caption: HTMLElement;

  constructor(popupSelector: string) {
    super(popupSelector);

    const image = this._popup.querySelector<HTMLImageElement>(
      ".popup__image"
    );

    const caption = this._popup.querySelector<HTMLElement>(
      ".popup__caption"
    );

    if (!image || !caption) {
      throw new Error("No se encontraron la imagen o el título del popup");
    }

    this._image = image;
    this._caption = caption;
  }

  override open(imageSrc?: string, imageCaption?: string): void {
  if (imageSrc && imageCaption) {
    this._image.src = imageSrc;
    this._image.alt = imageCaption;
    this._caption.textContent = imageCaption;
  }

  super.open();
}
}
