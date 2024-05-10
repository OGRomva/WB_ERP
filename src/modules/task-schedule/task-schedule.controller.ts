import {Controller, Post, UseGuards} from '@nestjs/common';
import {TaskScheduleService} from "./task-schedule.service";
import {Roles} from "../../decorators/roles-auth.decorator";
import {RolesGuard} from "../../guards/roles.guard";

@Roles('ADMIN')
@UseGuards(RolesGuard)
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
