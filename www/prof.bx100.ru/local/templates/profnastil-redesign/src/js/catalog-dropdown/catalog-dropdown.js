const BODY_OVERLAY_CLASSNAME = `menu-is-opened`;

export default class CatalogDropdown {
  constructor(
    containerSelector,
    togglerSelector,
    onShowCallback = () => {},
    onHideCallback = () => {}
  ) {
    this._containerElement = document.querySelector(containerSelector);
    this._openButtonElement = this._containerElement.querySelector(
      togglerSelector
    );
    this._dropdownElement = this._containerElement.querySelector(
      `.js-catalog-dropdown`
    );
    this._onShowCallback = onShowCallback;
    this._onHideCallback = onHideCallback;

    this._onShow = this._onShow.bind(this);
    this._onHide = this._onHide.bind(this);
  }

  _onShow() {
    document.body.classList.add(BODY_OVERLAY_CLASSNAME);

    this._onShowCallback();
  }

  _onHide() {
    document.body.classList.remove(BODY_OVERLAY_CLASSNAME);

    this._onHideCallback();
  }

  toggle() {
    this._openButtonElement.click();
  }

  _setHandlers() {
    this._containerElement.addEventListener(`shown.bs.dropdown`, this._onShow);
    this._containerElement.addEventListener(`hidden.bs.dropdown`, this._onHide);
  }

  init() {
    this._setHandlers();

  }
}
