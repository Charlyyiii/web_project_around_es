
import Popup from "./Popup.js";

interface FormValues {
  [key: string]: string;
}

export default class PopupWithForm extends Popup {
  private _handleFormSubmit: (inputValues: FormValues) => void;

  constructor(
    handleFormSubmit: (inputValues: FormValues) => void,
    popupSelector: string
  ) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  private _getInputValues(): FormValues {
    const form = this._popup.querySelector<HTMLFormElement>(".popup__form");

    if (!form) {
      throw new Error("No se encontró el formulario");
    }

    const inputList = form.querySelectorAll<HTMLInputElement>(
      ".popup__input"
    );

    const formValues: FormValues = {};

    inputList.forEach((inputElement) => {
      formValues[inputElement.name] = inputElement.value;
    });

    return formValues;
  }

  setEventListeners(): void {
    super.setEventListeners();

    const form = this._popup.querySelector<HTMLFormElement>(".popup__form");

    if (!form) {
      throw new Error("No se encontró el formulario");
    }

    form.addEventListener("submit", (event: SubmitEvent) => {
      event.preventDefault();

      this._handleFormSubmit(this._getInputValues());
    });
  }

  close(): void {
    super.close();

    const form = this._popup.querySelector<HTMLFormElement>(".popup__form");

    form?.reset();
  }
}
