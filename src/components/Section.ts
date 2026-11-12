
interface SectionOptions<T> {
  items: T[];
  renderer: (item: T) => HTMLElement;
}

export default class Section<T> {
  private _items: T[];
  private _renderer: (item: T) => HTMLElement;
  private _container: HTMLElement;

  constructor(
    { items, renderer }: SectionOptions<T>,
    containerSelector: string
  ) {
    this._items = items;
    this._renderer = renderer;

    const container = document.querySelector<HTMLElement>(containerSelector);

    if (!container) {
      throw new Error(`No se encontró el contenedor: ${containerSelector}`);
    }

    this._container = container;
  }

  renderItems(): void {
    this._items.forEach((item) => {
      this.addItem(this._renderer(item));
    });
  }

  addItem(element: HTMLElement): void {
    this._container.prepend(element);
  }
}
