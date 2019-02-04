import FetchGames from './modules/fetch-games';
import Menu from './modules/menu';

require('../css/style.scss');

const games = new FetchGames('../api/example.json', '.games-list');
// const games = new FetchGames('http://localhost/apiGe.php', '.games-list');
games.init();

const menu = new Menu('.menu__button', '.menu', '.menu a', games);
menu.init();
