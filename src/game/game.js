import gameController from './controller.js'
class Game {

  constructor() {
    this.gameController=gameController
  }

  init() {
this.gameController.initPages()
  }

}

export default new Game()