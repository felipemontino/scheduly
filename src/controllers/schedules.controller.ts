import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Schedule } from 'src/domain/schedule';
import { ScheduleService } from 'src/services/schedule.service';

@Controller()
export class SchedulesController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get('/schedules')
  getAll(): Array<Schedule> {
    return this.scheduleService.getAll();
  }

  @Get('/schedules/:id')
  getById(@Param('id') id: number): Schedule {
    return this.scheduleService.getById(id);
  }

  @Post('/schedules')
  create(@Body() schedule: Schedule){
    this.scheduleService.create(schedule);
  }

  @Put('/schedules/:id')
  update(@Param('id') id: number, @Body() schedule: Schedule){
    this.scheduleService.update(id, schedule);
  }

  @Delete('/schedules/:id')
  delete(@Param('id') id: number) {
    return this.scheduleService.delete(id);
  }
}
