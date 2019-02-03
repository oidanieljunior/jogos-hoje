import initFetchGames from './modules/fetch-games';
import Menu from './modules/menu';

require('../css/style.scss');

initFetchGames('../api/example.json', '.games-list');

const menu = new Menu('.menu__button', '.menu', '.menu a');
menu.init();
