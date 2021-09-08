import { Module } from '@nestjs/common';
import { CandidateModule } from './controllers/candidate/candidate.module';

@Module({
  imports: [CandidateModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
