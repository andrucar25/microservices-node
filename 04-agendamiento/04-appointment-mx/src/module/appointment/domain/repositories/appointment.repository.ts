import { Result } from "neverthrow";

import { Appointment } from "../roots/appointment";

export type AppointmentPage = { results: Appointment[]; total: number };
export type AppointmentResult = Result<Appointment, Error>;
export type AppointmentListResult = Result<Appointment[], Error>;
export type AppointmentPageResult = Result<AppointmentPage, Error>;

export interface AppointmentRepository {
  save(appointment: Appointment): Promise<AppointmentResult>;
  // receive(consumer: (message: any) => void): Promise<void>;
}