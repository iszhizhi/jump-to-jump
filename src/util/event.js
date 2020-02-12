class Event {
  constructor(sender) {
    this._sender = sender
    this._listeners = []
  }

//将回调函数push到数组里 调用时触发
  attach(callback) {
    this._listeners.push(callback)
  }

  notify(args) {
    for (let i = 0; i < this._listeners.length; i++) {
      this._listeners[i](this.sender, args)
    }
  }
}

export default Event