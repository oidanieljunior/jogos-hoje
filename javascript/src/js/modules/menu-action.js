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
    this.menuItem.addEventListener('click', () => callback(this.menu));
  }

  init() {
    this.addMenuLinkAction();
    return this;
  }
}

export class MenuActions {
  constructor(menuItems, menu) {
    this.menuItems = document.querySelectorAll(menuItems);
    this.menu = menu;
  }

  init() {
    this.menuItems = Array.from(this.menuItems);
    this.menuItems = this.menuItems.map((item) => {
      const menuItem = new MenuAction(item, this.menu);
      return menuItem.init();
    });

    return this;
  }
}
