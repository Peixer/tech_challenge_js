import { Global, Module } from '@nestjs/common';
import { CalendarioModule } from './calendar/calendario.module';
import { DatabaseMongoModule } from './calendar/database/mongodb/mongodb.module';

@Global()
@Module({
  imports: [DatabaseMongoModule, CalendarioModule],
  exports: [DatabaseMongoModule],
  providers: [],
})
export class CoreModule {}
