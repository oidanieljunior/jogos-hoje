
function closeMenuContainer(menu) {
  menu.closeMenu();
}

export function anotherDate(event, menu) {
  event.preventDefault();
  closeMenuContainer(menu);
}

export function getNowGames(event, menu, games) {
  event.preventDefault();
  closeMenuContainer(menu);
  games.hideOldGames();
}

export function showAllGames(event, menu, games) {
  event.preventDefault();
  closeMenuContainer(menu);
  games.showHiddenGames();
}
