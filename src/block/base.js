import baseConf from '../../confs/block-conf.js'


export default class Base {

  constructor(type) {
    this.type = type //圆柱体或者长方体
    this.height = baseConf.height
    this.width = baseConf.width
  }

}