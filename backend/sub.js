let mqtt = require("mqtt");
const client = mqtt.connect("mqtt://hairdresser.cloudmqtt.com", options);
let topic = "vendingmachine1/command";
let message = "Testinggggg hellloooooo ping ping ping";

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

client.on("connect", function() {
  // When connected
  console.log("connected");
  // subscribe to a topic
  client.subscribe("topic1/#", function() {
    // when a message arrives, do something with it
    client.on("message", function(topic, message, packet) {
      console.log("Received '" + message + "' on '" + topic + "'");
    });
  });
});
