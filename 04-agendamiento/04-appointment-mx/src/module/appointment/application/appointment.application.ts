// import RabbitMQBootstrap from "../../../bootstrap/rabbitmq";
// import logger from "../../../core/utils/logger";
import { AppointmentRepository } from "../domain/repositories/appointment.repository";
import { Appointment } from "../domain/roots/appointment";

export class AppointmentApplication {
  constructor(private readonly repository: AppointmentRepository) {}

  async save(appointment: Appointment) {
    return await this.repository.save(appointment);
  }

  // async receive() {
  //   await this.repository.receive(this.consumer);
  // }

  // consumer(message: any) {
  //   if (message) {
  //     RabbitMQBootstrap.channel.reject(message, false);
  //     logger.info(`Transacción compensatoria: ${message.content.toString()}`);
  //   }
  // }
}