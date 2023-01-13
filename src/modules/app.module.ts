import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { ScheduleModule } from './schedule.module';

@Module({
  imports: [ScheduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
