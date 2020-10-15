export const socket = {
  methods: {
    $newSocket: (url, func) => {
      const socket =  new WebSocket(url || 'ws://localhost:3000');
      socket.onopen = () => {
        console.log('open connection')
      }
      socket.onmessage = event => {
        let data = JSON.parse(event.data)
      }
      socket.onclose = () => {
        console.log('close connection')
      }
      return socket
    },
    $closeSocket: (socket) => {
      socket.close()
    }
  },
}