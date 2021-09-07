import { Module } from '@nestjs/common';
import { CoreModule } from '@app/core';
import { CalendarioProvider } from './providers/calendario.provider';
import { CalendarioService } from './services/calendario.service';

@Module({
  imports: [CoreModule],
  exports: [CalendarioService],
  providers: [...CalendarioProvider, CalendarioService],
})
export class CalendarioModule {}
