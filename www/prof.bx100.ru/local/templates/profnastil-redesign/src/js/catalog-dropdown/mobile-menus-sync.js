export default class MobileMenusSync {
  /**
   *
   * @param {object} catalogMenuInstance
   * @param {object} vueMenuInstance
   * @param {string} onPageMenuSelector
   * @param {string} popUpMenuSelector
   */
  constructor(catalogMenuInstance, vueMenuInstance, onPageMenuSelector, popUpMenuSelector) {
    this._catalogMenuInstance = catalogMenuInstance;
    this._vueMenuInstance = vueMenuInstance;

    this._onPageMenuElement = document.querySelector(onPageMenuSelector);
    this._popUpMenuElement = document.querySelector(popUpMenuSelector);

    this._onPageMenuLinkElements = this._onPageMenuElement.querySelectorAll(
      `.js-sync-with-popup`
    );

    this._popUpTogglerElement = this._popUpMenuElement.querySelector(
      `[data-bs-toggle]`
    );

    this._onLinkClick = this._onLinkClick.bind(this);
  }

  _openPopUpMenu() {
    this._catalogMenuInstance.toggle();
  }

  /**
   * Opens section in the popup catalog menu by index.php
   * @param {number} targetSectionIndex
   * @private
   */
  _openSection(targetSectionIndex) {
    const [vueMenuComponent] = this._vueMenuInstance.$children;
    const catalogSectionIndex = 0;

    // navigate([mainSectionIndex, subSectionIndex, subSubSectionIndex ....])
    vueMenuComponent.navigate([catalogSectionIndex, targetSectionIndex]);
  }

  _onLinkClick(evt) {
    evt.preventDefault();

    // Open menu
    this._openPopUpMenu();

    // Open clicked section in popupmenu
    const targetSectionIndex = parseInt(evt.currentTarget.dataset.index);
    this._openSection(targetSectionIndex);
  }

  _setHandlers() {
    this._onPageMenuLinkElements.forEach((linkElement) =>
      linkElement.addEventListener(`click`, this._onLinkClick)
    );
  }

  init() {
    this._setHandlers();
  }
}
