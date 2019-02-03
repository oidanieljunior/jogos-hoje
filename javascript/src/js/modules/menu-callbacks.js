
function closeMenuContainer(menu) {
  menu.closeMenu();
}

export function anotherDate(menu) {
  closeMenuContainer(menu);
}

export function getNowGames(menu) {
  closeMenuContainer(menu);
  const now = new Date();

  // Pega a hora atual e subtrai uma hora e meia
  const timeToGames = Math.floor((now.getTime() - 5400000) / 1000);

  const games = Array.from(document.querySelectorAll('.game'));

  // Cria uma array com os jogos que já acabaram
  // (com base apenas no tempo, ignorando possiveis atrasos)
  const olders = games.filter(game => +game.dataset.startDate < timeToGames);

  olders.forEach(older => older.classList.add('hidden'));
}
