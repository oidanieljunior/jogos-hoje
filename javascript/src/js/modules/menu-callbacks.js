
function closeMenuContainer(menu) {
  menu.closeMenu();
}

export function anotherDate(menu) {
  closeMenuContainer(menu);
}

export function getNowGames(menu) {
  closeMenuContainer(menu);
  const olders = document.querySelectorAll('.game:nth-of-type(-n+5)');

  olders.forEach(older => older.remove());
}
