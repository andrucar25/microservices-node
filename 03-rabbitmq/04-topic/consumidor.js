//esto es similar a direct, solo que el productor puede enviar a mensaje a las colas que desee
//gracias al binding, Por ejemplo le envia un mensaje a payment.error y aquellos consumidores
//que tengan .payment.error o *.error van a recibir el mensaje. el que tenga .store.error no lo va a recibir 

import amqp from "amqplib";
const args = process.argv.slice(2);

(async () => {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  const exchangeName = "exchange-topic";
  await channel.assertExchange(exchangeName, "topic", { durable: true });

  const assertQueue = await channel.assertQueue("", { exclusive: true });
  const routingKeys = args.length > 0 ? args : ["key"];

  const listBindings = [];

  for (const routingKey of routingKeys) {
    listBindings.push(
      channel.bindQueue(assertQueue.queue, exchangeName, routingKey)
    );
  }

  Promise.all(listBindings).then(() => {
    channel.consume(
      assertQueue.queue,
      (message) => console.log(message.content.toString()),
      { noAck: false }
    );
  });
})();