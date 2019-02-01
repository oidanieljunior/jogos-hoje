import initFetchGames from './modules/fetch-games';
import Menu from './modules/menu';
import { MenuActions } from './modules/menu-action';

require('../css/style.scss');

initFetchGames('http://localhost/apiGe.php', '.games-list');

const menu = new Menu('.menu__button', '.menu');
menu.init();

const links = new MenuActions('.menu a');
links.init();
