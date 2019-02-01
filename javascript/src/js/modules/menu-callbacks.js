export function anotherDate() {
  window.alert('Calendario para seleção da data');
}

export function getNowGames() {
  const olders = document.querySelectorAll('.game:nth-of-type(-n+5)');

  olders.forEach(older => older.remove());
}
