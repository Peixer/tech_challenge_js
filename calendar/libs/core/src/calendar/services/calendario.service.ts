/* eslint-disable import/prefer-default-export */
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CalendarioEventoDTO } from '../dto/ICalendario';
import { ICalendario, Calendario } from '../schemas/calendario.schema';

@Injectable()
export class CalendarioService {
  constructor(
    @Inject('CALENDARIO_MODEL')
    private readonly calendarioSchema: Model<Calendario>,
  ) {}

  public async create(
    calendarioDto: CalendarioEventoDTO,
  ): Promise<ICalendario> {
    const calendar = new this.calendarioSchema(calendarioDto);

    return calendar.save();
  }

  public async find(id: string): Promise<ICalendario> {
    return await this.calendarioSchema.findById(id);
  }

  public async update(id: string, body: any): Promise<ICalendario> {
    const updatedCalendar = await this.calendarioSchema
      .findOneAndUpdate(
        { _id: id },
        {
          ...body,
        },
      )
      .exec();
    return updatedCalendar;
  }
}
