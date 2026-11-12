
interface FormValidatorConfig {
  inputSelector: string;
  submitButtonSelector: string;
  inactiveButtonClass: string;
  inputErrorClass: string;
  errorClass: string;
}

export default class FormValidator {
  private _config: FormValidatorConfig;
  private _formElement: HTMLFormElement;
  private _inputList: NodeListOf<HTMLInputElement>;
  private _submitButton: HTMLButtonElement | null;

  constructor(config: FormValidatorConfig, formElement: HTMLFormElement) {
    this._config = config;
    this._formElement = formElement;

    this._inputList = this._formElement.querySelectorAll<HTMLInputElement>(
      this._config.inputSelector
    );

    this._submitButton = this._formElement.querySelector<HTMLButtonElement>(
      this._config.submitButtonSelector
    );
  }

  private _showInputError(
    inputElement: HTMLInputElement,
    errorMessage: string
  ): void {
    const errorElement = this._formElement.querySelector<HTMLElement>(
      `#${inputElement.id}-error`
    );

    inputElement.classList.add(this._config.inputErrorClass);

    if (errorElement) {
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._config.errorClass);
    }
  }

  private _hideInputError(inputElement: HTMLInputElement): void {
    const errorElement = this._formElement.querySelector<HTMLElement>(
      `#${inputElement.id}-error`
    );

    inputElement.classList.remove(this._config.inputErrorClass);

    if (errorElement) {
      errorElement.textContent = "";
      errorElement.classList.remove(this._config.errorClass);
    }
  }

  private _checkInputValidity(inputElement: HTMLInputElement): void {
    if (!inputElement.validity.valid) {
      this._showInputError(
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(inputElement);
    }
  }

  private _hasInvalidInput(): boolean {
    return Array.from(this._inputList).some(
      (inputElement) => !inputElement.validity.valid
    );
  }

  private _toggleButtonState(): void {
    if (!this._submitButton) return;

    if (this._hasInvalidInput()) {
      this._submitButton.disabled = true;
      this._submitButton.classList.add(
        this._config.inactiveButtonClass
      );
    } else {
      this._submitButton.disabled = false;
      this._submitButton.classList.remove(
        this._config.inactiveButtonClass
      );
    }
  }

  private _setEventListeners(): void {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });

    this._toggleButtonState();
  }

  enableValidation(): void {
    this._setEventListeners();
  }

  resetValidation(): void {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });

    this._toggleButtonState();
  }
}
