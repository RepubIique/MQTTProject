let mqtt = require("mqtt");

let topic = "vendingmachine1/command";

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

  client.subscribe("vendingmachine1/feedback", error => {
    if (error) console.error(error);
    else {
      client.publish(topic, "1");
    }
  });
});

client.on("message", (topic, message) => {
  console.log(topic, message.toString());
});
