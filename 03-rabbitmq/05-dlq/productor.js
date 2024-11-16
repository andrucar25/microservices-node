//es la cola de los fallidos. El proceso empieza como normalmente, el productor envia mensaje
//al intercambiador que lo deriva a la cola pero cuando hay error, este mensaje pasa de la cola a otro intercambiador
//que es el que va a derivar a la cola de errores
import amqp from "amqplib";
const args = process.argv.slice(2);

(async () => {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  const exchangeName = "exchange-direct";
  await channel.assertExchange(exchangeName, "direct", { durable: true });

  const message = args.length > 0 ? args[0] : "message by default";
  const routingKey = args.length > 1 ? args[1] : "key";

  channel.publish(exchangeName, routingKey, Buffer.from(message));

  setTimeout(() => {
    connection.close();
    process.exit(1);
  }, 2000);
})();