import scene from '../scene/scene.js'
import Cuboid from '../block/cuboid.js'
import Cylinder from '../block/cylinder.js'
import ground from '../object/ground.js'

class GamePage {

  constructor(callbacks) {
    this.callbacks = callbacks
  }

  init() {
    this.ground = ground
    this.scene = scene
    this.scene.init()
    this.ground.init()
    this.addGround()
    this.addInitBlock()
    this.render()
    console.log('初始化开始界面')
  }

  show() {
    console.log('显示游戏界面')
  }

  restart() {
    console.log('清楚状态')
  }

  // 添加背景

  addGround() {
this.scene.instance.add(this.ground.instance)
  }

  // 添加block

  addInitBlock() {
    const cuboid = new Cuboid(-15, 0, 0)
    const cylinder = new Cylinder(15, 0, 0)
    this.scene.instance.add(cuboid.instance)
    this.scene.instance.add(cylinder.instance)
  }

  // 渲染界面
  render() {
    this.scene.render()
    requestAnimationFrame(this.render.bind(this))
  }

}

export default GamePage