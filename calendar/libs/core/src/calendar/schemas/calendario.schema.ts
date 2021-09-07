import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Calendario extends Document {
  @Prop()
  filtro: any;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export type ICalendario = Calendario & Document;
export const CalendarioSchema = SchemaFactory.createForClass(Calendario);
