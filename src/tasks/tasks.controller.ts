import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDTO, UpdateTaskDTO } from './task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(@Inject(TasksService) private tasksService: TasksService) {}

  @Get('/all')
  getAllTasksHandler() {
    return this.tasksService.findAllTaskService();
  }

  @Get('/:id')
  getTasksByIdHandler(@Param() id: string) {
    return this.tasksService.findTaskByIdService(id);
  }

  @Post('/')
  createTaskHandler(@Body() createTaskDTO: CreateTaskDTO) {
    return this.tasksService.createTaskService(createTaskDTO);
  }

  @Put('/special/:id')
  updateTaskWithDetailHandler(
    @Param() id: string,
    @Body() updateTaskDTO: UpdateTaskDTO,
  ) {
    return this.tasksService.updateStatusWithDetailByIdService(
      id,
      updateTaskDTO,
    );
  }

  @Put('/:id')
  updateTaskHandler(@Param() id: string) {
    return this.tasksService.updateStatusByIdService(id);
  }

  @Delete('/')
  deleteTaskHandler(id: string) {
    return this.deleteTaskHandler(id);
  }
}
