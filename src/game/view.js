import gamePage from '../pages/game-page.js'
import gameOverPage from '../pages/game-over-page.js'

class GameView {

  constructor() {}

  // 显示游戏结束
  showGameOverPage() {
    this.gameOverPage.show()
  }

  // 重新开始游戏
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