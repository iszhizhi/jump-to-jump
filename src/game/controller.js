import gameView from './view.js'
import gameModel from './model.js'

class Controller {

  constructor() {
    this.gameModel = gameModel
    this.gameView = gameView
    this.gameModel.stageChanged.attach((sender, args) => {
      const stageName = args.stage
      switch (stageName) {
        case 'game-over':
          this.gameView.showGameOverPage()
        case 'game':
          this.gameView.showGamePage()
        default:
      }
    })
  }


  //初始化界面 统一管理初始和结束
  initPages() {

    const gamePageCallbacks = () => {
      this.gameModel.setStage('game-over')
    }

    const gameOverPageCallbacks = () => {
      this.gameModel.setStage('game')
    }
    this.gameView.initGameOverPage(gameOverPageCallbacks)
    this.gameView.initGamePage(gamePageCallbacks)
  }

}

export default new Controller()