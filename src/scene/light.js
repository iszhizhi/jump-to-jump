class Light {

  constructor() {
    this.instances = {}
  }

  init() {
    const ambient = new THREE.AmbientLight(0xffffff
    , 0.8)
    const shadowLight = new THREE.DirectionalLight(0xfffff, 0.3)
    shadowLight.position.set(10, 20, 30)
    let basicMaterial = new THREE.MeshBasicMaterial({
      color: 0xf5f5f5
    })
    this.shadowTarget = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.1), basicMaterial)
    this.shadowTarget.visable = false
    this.shadowTarget.name = 'shadowTarget'
    shadowLight.target = this.shadowTarget


    this.instances.shadowLight = shadowLight
    this.instances.ambient = ambient
    this.instances.shadowTarget = this.shadowTarget
  }
}



export default new Light()