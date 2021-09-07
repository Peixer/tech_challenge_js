import { Mongoose } from 'mongoose';
import { MONGODB } from '../constants/constants';
import { CalendarioSchema } from '../schemas/calendario.schema';

export const CalendarioProvider = [
  {
    provide: 'CALENDARIO_MODEL',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('Calendario', CalendarioSchema),
    inject: [MONGODB],
  },
];
