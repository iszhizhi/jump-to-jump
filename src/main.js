import * as THREE from '../libs/three.js'
import '../libs/weapp-adapter'
window.THREE=THREE
 class Main{
  constructor(){}
  init(){
    console.log('main function')
  }
}

export default new Main()