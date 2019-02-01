export function anotherDate() {
  console.log('abre o calendario');
}

export function getNowGames() {
  const olders = document.querySelectorAll('.game:nth-of-type(-n+5)');

  olders.forEach(older => older.remove());
}
