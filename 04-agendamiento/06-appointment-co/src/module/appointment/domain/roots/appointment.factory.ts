import { Appointment, AppointmentProps } from "./appointment";

export class AppointmentFactory {
  private constructor() {}

  static async create(props: AppointmentProps): Promise<Appointment> {
    return new Appointment(props);
  }
}