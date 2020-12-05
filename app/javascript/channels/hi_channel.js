import consumer from "./consumer"


consumer.subscriptions.create("HiChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log("received", data)
    let tr = document.createElement('tr')
    tr.textContent = data['data']
    document.querySelector('tr:last-child').appendChild(tr)
  },

  send_message(data){
    this.perform("send_message", {data: data})
  }
});

window.consumer = consumer;
