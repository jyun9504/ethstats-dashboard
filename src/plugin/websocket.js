export default {
  install(Vue, options) {
    Vue.prototype.$websocket = {
      new: (url, func) => {
        const socket =  new WebSocket(url || 'ws://localhost:3000');
        socket.onopen = () => {
          console.log('open connection')
        }
        socket.onmessage = event => {
          func(JSON.parse(event.data))
        }
        socket.onclose = () => {
          console.log('close connection')
        }
        return socket
      },
      close: (socket) => {
        socket.close()
      }
    }
  }
}
