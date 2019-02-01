import * as menuCallback from './menu-callbacks';

export class MenuAction {
  constructor(menuItem, action, events = ['touchstart', 'click']) {
    this.events = events;
    if (typeof menuItem === 'string') this.menuItem = document.querySelector(menuItem);
    else this.menuItem = menuItem;

    if (action === undefined) this.action = this.menuItem.attributes.href.value.slice(1);
    else this.action = action;
  }

  init() {
    this.menuItem.addEventListener('click', menuCallback[this.action]);
    return this;
  }
}

export class MenuActions {
  constructor(menuItems) {
    this.menuItems = document.querySelectorAll(menuItems);
  }

  init() {
    this.menuItems = Array.from(this.menuItems);
    this.menuItems = this.menuItems.map((item) => {
      const menuItem = new MenuAction(item);
      return menuItem.init();
    });

    return this;
  }
}
