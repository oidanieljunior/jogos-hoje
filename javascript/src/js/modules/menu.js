import outsideClick from './outsideclick';
import { MenuActions } from './menu-action';

export default class Menu {
  constructor(menuButton, menuList, menuLinks, events = ['touchstart', 'click']) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'show';
    this.events = events;
    this.menuLinks = menuLinks;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.toggle(this.activeClass);
    this.menuButton.classList.toggle(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  closeMenu() {
    this.menuList.classList.remove(this.activeClass);
    this.menuButton.classList.remove(this.activeClass);
  }

  addMenuMobileEvents() {
    this.events.forEach(evento => this.menuButton.addEventListener(evento, this.openMenu));
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();

      this.menuLinks = new MenuActions(this.menuLinks, this);
      this.menuLinks.init();
    }
    return this;
  }
}
