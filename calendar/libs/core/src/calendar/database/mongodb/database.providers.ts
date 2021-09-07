import * as mongoose from 'mongoose';
import { MONGODB } from '../../constants/constants';

export const databaseProviders = [
  {
    provide: MONGODB,
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(
        `mongodb://${process.env.DB_MONGODB_USER}:${process.env.DB_MONGODB_PASS}@${process.env.DB_MONGODB_HOST}:${process.env.DB_MONGODB_PORT}/?authSource=admin&readPreference=primary`,
      ),
  },
];
