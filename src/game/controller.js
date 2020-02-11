import gameView from './view.js'
import gameModel from './model.js'

class Controller {

  constructor() {
    this.gameModel = gameModel
    this.gameView = gameView
  }

  showGameOverPage = () => {
    this.gameView.showGameOverPage()
  }

  restartGamePage = () => {
    this.gamePage.restart()
  }

  //初始化界面 统一管理初始和结束
  initPages() {

    const gamePageCallbacks = {
      showGameOverPage: this.showGameOverPage
    }

    const gameOverPageCallbacks = {
      gameRestart: this.restartGamePage
    }

    this.gameView.initGamePage(gamePageCallbacks)
    this.gameView.initGameOverPage(gameOverPageCallbacks)
  }

}

export default new Controller()