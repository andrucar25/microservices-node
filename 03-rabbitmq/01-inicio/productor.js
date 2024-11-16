import amqp from "amqplib";
const args = process.argv.slice(2);

//el mensaje va a una cola

(async () => {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  const queueName = "queue01";
  await channel.assertQueue(queueName, { durable: true }); //conecta a una cola, si no existe la crea. durable hacer que la cola tenga persistencia, osea si por alguna razon deja de funcionar el nodo de rabbit, la cola sigue funcionando

  const message = args.length > 0 ? args[0] : "message by default";

  channel.sendToQueue(queueName, Buffer.from(message));

  for (let i = 0; i <= 9; i++) {
    channel.sendToQueue(queueName, Buffer.from(`${message} -  ${i}`));
  }

  setTimeout(() => {
    connection.close();
    process.exit(1);
  }, 2000);
})();

