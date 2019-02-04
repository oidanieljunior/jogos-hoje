
function closeMenuContainer(menu) {
  menu.closeMenu();
}

export function anotherDate(menu, games) {
  closeMenuContainer(menu);
}

export function getNowGames(menu, games) {
  closeMenuContainer(menu);
  games.hideOldGames();
}

export function showAllGames(menu, games) {
  closeMenuContainer(menu);
  games.showHiddenGames();
}
