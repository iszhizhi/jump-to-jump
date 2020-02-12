import gamePage from '../pages/game-page.js'
import gameOverPage from '../pages/game-over-page.js'

class GameView {

  constructor() {}

  // 显示游戏结束
  showGameOverPage() {
    this.gamePage
    this.gameOverPage.show()
  }

  // 显示游戏开始
  showGamePage() {
    this.gameOverPage.hide()
    this.gamePage.restart()
    this.gamePage.show()
  }

  // 清除所有状态
  restartGamePage() {
    this.gamePage.restart()
  }

  initGameOverPage(callbacks) {
    this.gameOverPage = new gameOverPage(callbacks)
    this.gameOverPage.init()
  }

  initGamePage(callbacks) {
    this.gamePage = new gamePage(callbacks)
    this.gamePage.init()
  }

}

export default new GameView()