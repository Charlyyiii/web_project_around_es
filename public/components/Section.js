export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        const container = document.querySelector(containerSelector);
        if (!container) {
            throw new Error(`No se encontró el contenedor: ${containerSelector}`);
        }
        this._container = container;
    }
    renderItems() {
        this._items.forEach((item) => {
            this.addItem(this._renderer(item));
        });
    }
    addItem(element) {
        this._container.prepend(element);
    }
}
