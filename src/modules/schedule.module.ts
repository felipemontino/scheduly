import { Module } from '@nestjs/common';
import { SchedulesController } from '../controllers/schedules.controller';
import { ScheduleService } from '../services/schedule.service';

@Module({
  imports: [],
  controllers: [SchedulesController],
  providers: [ScheduleService],
})
export class ScheduleModule {}
