import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor(handleFormSubmit, popupSelector) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
    }
    _getInputValues() {
        const form = this._popup.querySelector(".popup__form");
        if (!form) {
            throw new Error("No se encontró el formulario");
        }
        const inputList = form.querySelectorAll(".popup__input");
        const formValues = {};
        inputList.forEach((inputElement) => {
            formValues[inputElement.name] = inputElement.value;
        });
        return formValues;
    }
    setEventListeners() {
        super.setEventListeners();
        const form = this._popup.querySelector(".popup__form");
        if (!form) {
            throw new Error("No se encontró el formulario");
        }
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }
    close() {
        super.close();
        const form = this._popup.querySelector(".popup__form");
        form === null || form === void 0 ? void 0 : form.reset();
    }
}
