import * as menuCallback from './menu-callbacks';

export class MenuAction {
  constructor(menuItem, menu, action, events = ['touchstart', 'click']) {
    this.events = events;
    this.menu = menu;

    if (typeof menuItem === 'string') this.menuItem = document.querySelector(menuItem);
    else this.menuItem = menuItem;

    if (action === undefined) this.action = this.menuItem.attributes.href.value.slice(1);
    else this.action = action;
  }

  addMenuLinkAction() {
    const callback = menuCallback[this.action];
    this.action = () => callback(this.menu);
    this.menuItem.addEventListener('click', this.action);
  }

  removeMenuLinkAction() {
    if (typeof this.action === 'function') {
      this.menuItem.removeEventListener('click', this.action);
    }
  }

  init() {
    this.addMenuLinkAction();
    return this;
  }
}

export function menuActions(menuItemsSelector, menu) {
  let menuItems = document.querySelectorAll(menuItemsSelector);

  menuItems = Array.from(menuItems);
  return menuItems.map((item) => {
    const menuItem = new MenuAction(item, menu);
    return menuItem.init();
  });
}