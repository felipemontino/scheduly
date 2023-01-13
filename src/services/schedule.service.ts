/* eslint-disable prefer-const */
import { Injectable } from '@nestjs/common';
import { Schedule } from 'src/domain/schedule';

@Injectable()
export class ScheduleService {
  private schedules: Array<Schedule>;

  constructor() {
      this.schedules = new Array<Schedule>();
  }

  getAll(): Array<Schedule> {
    return this.schedules;
  }

  getById(id: number): Schedule {
    return this.schedules.find((schedule) => schedule.getId() == id);
  }

  create(schedule: Schedule){
    this.schedules.push(schedule);
  }

  update(id: number, schedule: Schedule){

    let scheduleToUpdate = this.schedules.find((schedule) => schedule.getId() == id);

    let index = this.schedules.indexOf(scheduleToUpdate);

    this.schedules[index] = schedule;
  }

  delete(id: number){
    let scheduleToUpdate = this.schedules.find((schedule) => schedule.getId() == id);

    let index = this.schedules.indexOf(scheduleToUpdate);

    this.schedules.splice(index, 1);
  }
}
