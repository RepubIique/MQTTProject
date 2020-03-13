let mqtt = require("mqtt");

let topic = "vendingmachine2/command";

const options = {
  port: 16987,
  host: "mqtt://hairdresser.cloudmqtt.com",
  clientId: "KendrickTest",
  username: "gdyqmxhb",
  password: "qYlscJNX0e5F",
  keepalive: 60,
  reconnectPeriod: 1000,
  protocolId: "MQIsdp",
  protocolVersion: 3,
  clean: true,
  encoding: "utf8"
};
const client = mqtt.connect("mqtt://hairdresser.cloudmqtt.com", options);

client.on("connect", function() {
  // When connected
  console.log("connected");

  client.subscribe("vendingmachine2/feedback", error => {
    if (error) console.error(error);
    else {
      client.publish(topic, "0");
      openDoor();
    }
  });
});

client.on("message", (topic, message) => {
  console.log(topic, message.toString());
});

let door = [1, 2, 3, 4];

function openDoor() {
  // client.on("connect", () => {
  for (let i = 0; i < door.length; i++) {
    client.publish(topic, door[i]);
  }
  // });
}
