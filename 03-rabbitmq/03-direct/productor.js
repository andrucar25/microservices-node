//hay varios consumidores y un productor. el mensaje va al intercambiador y lo asigna a la 
//cola del consumidor que tenga el mismo binding. Ejemplo el ms de agendamiento manda un mensaje con el binding MX
//entonces va a la cola de MX y no se reparte al resto de ms de colombia y chile

import amqp from "amqplib";
const args = process.argv.slice(2);

(async () => {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  const exchangeName = "exchange-direct"
  await channel.assertExchange(exchangeName, "direct", {durable: true})

  const message = args.length> 0 ? args[0]: "message by default"
  const routingKey = args.length > 1 ? args[1]: "key"

  channel.publish( exchangeName, routingKey, Buffer.from(message))

  setTimeout(() => {
    connection.close();
    process.exit(1);
  }, 2000);

})();







// ver nuevo bar mexicano