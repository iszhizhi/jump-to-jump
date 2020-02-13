import BaseBlock from './base.js'

export default class Cuboid extends BaseBlock {

  constructor(x, y, z, width) {
    super('cuboid')
    const size = width || this.width
    const geometry = new THREE.BoxGeometry(size, this.height, size)
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff
    })
    this.instance = new THREE.Mesh(geometry, material)

    this.instance.position.x = x
    this.instance.position.y = y
    this.instance.z = z

  }

}