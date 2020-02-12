import * as THREE from "../libs/three.js";
// @ts-ignore
window.THREE = THREE;
import "../libs/weapp-adapter";
import game from "./game/game.js";

class Main {
  constructor() {}

  static init() {
    game.init();
  }
}

export default Main;
