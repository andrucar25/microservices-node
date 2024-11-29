import { ok } from "neverthrow";

import RabbitMQBootstrap from "../../../bootstrap/rabbitmq";
import { Parameter } from "../../../core/parameter";
import {
  AppointmentResult,
  AppointmentRepository,
} from "../domain/repositories/appointment.repository";
import { Appointment } from "../domain/roots/appointment";

export class AppointmentInfrastructure implements AppointmentRepository {
  async save(appointment: Appointment): Promise<AppointmentResult> {
    const channel = RabbitMQBootstrap.channel;
    const exchangeName = Parameter.EXCHANGE_NAME;
    const exchangeType = Parameter.EXCHANGE_TYPE;
    const exchangeOptions = { durable: true };
    const routingKey = appointment.properties().isoCountryCode;

    await channel.assertExchange(exchangeName, exchangeType, exchangeOptions);
    channel.publish(
      exchangeName,
      routingKey,
      Buffer.from(JSON.stringify(appointment))
    );

    return Promise.resolve(ok(appointment));
  }

}