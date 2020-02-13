import sceneConf from '../../confs/scene-conf.js'

class Background {

  constructor() {}

  init() {

    const geometry = new THREE.PlaneGeometry(sceneConf.frustumSize * 2, window.innerHeight / window.innerWidth * sceneConf.frustumSize*2)
    const material = new THREE.MeshBasicMaterial({
      transparent: true,
      opticy: 1,
      color: 0xd7dbe6
    })

    this.instance = new THREE.Mesh(geometry, material)

  }

}

export default new Background()