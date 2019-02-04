export default class FetchGames {
  constructor(url, parent) {
    this.url = url;
    this.selector = parent;
    this.gamesList = document.querySelector(this.selector);
    this.hidden = [];
    this.gameClass = 'game';
    this.hiddenClass = 'hidden';
  }

  // Cria elementos e adiciona o necessario
  createElement(tag, classes = []) {
    const element = document.createElement(tag);
    if (classes.length) element.classList.add(...classes);
    return element;
  }

  // Cria cada div individual
  // de cada time
  createTeam(team) {
    const element = this.createElement('div', [`${this.gameClass}__team`]);
    element.innerHTML = `<img src="${team.logo}"><h4>${team.alternateName}</h4><span>${team.name}</span>`;
    return element;
  }

  // Cria a div com o nome
  // e horario do jogo
  createInfo(name, time) {
    const element = this.createElement('div', [`${this.gameClass}__info`]);
    element.innerHTML = `<h3>${name}</h3><h5>${time}</h5>`;
    return element;
  }

  // Cria o elemento da lista
  // para cada jogo e o retorna
  createGame(game) {
    const element = this.createElement('li', [this.gameClass]);
    element.dataset.startDate = game.startDate.timestamp;
    element.appendChild(this.createInfo(game.name, game.startDate.time.full));
    element.appendChild(this.createTeam(game.teams.homeTeam));
    element.appendChild(this.createTeam(game.teams.awayTeam));
    return element;
  }

  // Insere um jogo na lista
  insertGames(game) {
    const gameElement = this.createGame(game);
    this.gamesList.appendChild(gameElement);
  }

  // Oculta uma array com elementos
  // E os adiciona na lista "hidden"
  hideGames(list) {
    this.hidden = list.map((element) => {
      element.classList.add(this.hiddenClass);
      return element;
    });
  }

  // Oculta jogos que ja aconteceram
  hideOldGames() {
    const now = new Date();

    // Pega a hora atual e subtrai uma hora e meia
    const timeToGames = Math.floor((now.getTime() - 5400000) / 1000);

    const games = Array.from(document.querySelectorAll(`.${this.gameClass}`));

    // Cria uma array com os jogos que já acabaram
    // (com base apenas no tempo, ignorando possiveis atrasos)
    const olders = games.filter(game => +game.dataset.startDate < timeToGames);

    this.hideGames(olders);
  }

  // Mostra os jogos ocultos
  // e os remove da lista "hidden"
  showHiddenGames() {
    if (this.hidden.length) {
      this.hidden = this.hidden.filter((game) => {
        game.classList.remove(this.hiddenClass);
        return game.classList.contains(this.hiddenClass);
      });
    }
  }

  async init() {
    try {
      // Espera a resposta e transforma em json
      const gamesResponse = await fetch(this.url);
      const gamesJSON = await gamesResponse.json();

      // (Variavel removida) Pega o horario atual
      // const currentTime = Math.round(new Date().getTime() / 1000) || 0;

      // Executa as funcoes para cada jogo
      gamesJSON.forEach(game => this.insertGames(game));
    } catch (error) {
      console.log(error);
    }
  }
}
