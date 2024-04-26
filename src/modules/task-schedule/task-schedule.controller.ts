import {Controller, Post} from '@nestjs/common';
import {TaskScheduleService} from "./task-schedule.service";

@Controller()
export class TaskScheduleController {
    constructor(private taskScheduleService: TaskScheduleService) {}
    @Post()
    updateTablesOncePerDay() {
        return this.taskScheduleService.updateTablesOncePerDay();
    }

    @Post()
    updateTablesOncePerWeek() {
        return this.taskScheduleService.updateTablesOncePerWeek();
    }
}
