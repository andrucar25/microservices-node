import { ok } from "neverthrow";

import RabbitMQBootstrap from "../../../bootstrap/rabbitmq";
import { Parameter } from "../../../core/parameter";
import {
  AppointmentResult,
  AppointmentRepository,
} from "../domain/repositories/appointment.repository";
import { Appointment } from "../domain/roots/appointment";

export class AppointmentInfrastructure implements AppointmentRepository {
  async receive(consumer: (message: any)=> void) {
    const channel = RabbitMQBootstrap.channel;
    const exchangeName = Parameter.EXCHANGE_NAME;
    const exchangeType = Parameter.EXCHANGE_TYPE;
    const exchangeOptions = { durable: true };
    const routingKey = Parameter.ROUTING_KEY;
    // const exchangeNameDLQ = Parameter.EXCHANGE_NAME_DLQ;
    // const routingKeyDLQ = Parameter.ROUTING_KEY_DLQ;

    await channel.assertExchange(exchangeName, exchangeType, exchangeOptions);

    const queue = await channel.assertQueue("", {
      exclusive: true
    });
    await channel.bindQueue(queue.queue, exchangeName, routingKey);
    await channel.consume(queue.queue, consumer, { noAck: false });
  }

}