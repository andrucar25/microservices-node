import amqp from "amqplib";
const args = process.argv.slice(2);

//el mismo mensaje va a varias colas

(async () => {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  const exchangeName = "exchange-fanout";
  await channel.assertExchange(exchangeName, "fanout", { durable: true });

  const message = args.length > 0 ? args[0] : "message by default";
  channel.publish(exchangeName, "", Buffer.from(message));//pasarle el mensaje al intercambiador

  setTimeout(() => {
    connection.close();
    process.exit(1);
  }, 2000);
})();