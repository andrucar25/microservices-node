import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

import { AppointmentApplication } from "../application/appointment.application";
import { AppointmentFactory } from "../domain/roots/appointment.factory";

export class AppointmentController {
  constructor(private readonly application: AppointmentApplication) {}
  async create(req: Request, res: Response, next: NextFunction) {
    const body = req.body;
    const id = uuidv4();
    const appoinment = await AppointmentFactory.create(body);

    const appoinmentResult = await this.application.save(appoinment);
    if (appoinmentResult.isErr()) {
      return next(appoinmentResult.error);
    }

    res.json(appoinmentResult.value);
  }
  
}