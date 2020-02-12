import 
  scene
 from '../scene/scene.js'

class GamePage {

  constructor(callbacks) {
    this.callbacks = callbacks
  }

  init() {
    this.scene = scene
    this.scene.init()
    this.render()
    console.log('初始化开始界面')
  }

  show() {
    console.log('显示游戏界面')
  }

  restart() {
    console.log('清楚状态')
  }

  // 渲染界面
  render() {
    this.scene.render()
    requestAnimationFrame(this.render.bind(this))
  }

}

export default GamePage