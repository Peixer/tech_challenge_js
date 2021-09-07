import { Module } from '@nestjs/common';
import { DatabaseMongoModule } from './mongodb/mongodb.module';

@Module({
  imports: [DatabaseMongoModule],
  providers: [],
})
export class DatabaseModule {}
