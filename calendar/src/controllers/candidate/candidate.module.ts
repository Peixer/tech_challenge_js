import { CalendarioModule } from '@app/core/calendar/calendario.module';
import { Module } from '@nestjs/common';
import { CandidateController } from './candidate.controller';

@Module({
  imports: [CalendarioModule],
  controllers: [CandidateController],
  providers: [],
})
export class CandidateModule {}
