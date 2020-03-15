let mqtt = require("mqtt");
let topic = "vendingmachine2/command";
const options = {
  port: 36987,
  host: "wss://hairdresser.cloudmqtt.com",
  clientId: "KendrickTest",
  username: "gdyqmxhb",
  password: "qYlscJNX0e5F",
  keepalive: 60,
  reconnectPeriod: 1000,
  protocolId: "MQIsdp",
  protocolVersion: 3,
  clean: true,
  encoding: "utf8",
  timeout: 3,
  useSSL: true
};

export const MQTTConnect = cart => {
  const client = mqtt.connect("wss://hairdresser.cloudmqtt.com", options);

  client.on("connect", function() {
    // When connected
    console.log("connected");

    client.subscribe("vendingmachine2/feedback", error => {
      if (error) console.error(error);
      else {
        client.publish(topic, "0");
      }
    });
    openDoor();
  });

  client.on("message", (topic, message) => {
    console.log(topic, message.toString());
  });

  function openDoor() {
    cart.forEach(x => {
      console.log(`Opening door ${x}`);
      client.publish(topic, x.toString());
    });
  }
};
