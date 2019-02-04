import outsideClick from './outsideclick';
import { menuActions } from './menu-action';

export default class Menu {
  constructor(menuButton, menuList, menuLinks, games, events = ['touchstart', 'click']) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'show';
    this.events = events;
    this.menuLinks = menuLinks;
    this.games = games;

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

  addMenuLinks() {
    // Cria as acoes para
    // os links do menu
    this.menuLinks = menuActions(this.menuLinks, this, this.games);
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
      if (this.menuLinks) this.addMenuLinks();
    }
    return this;
  }
}
