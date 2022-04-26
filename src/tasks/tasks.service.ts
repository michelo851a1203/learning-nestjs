import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateTaskDTO, UpdateTaskDTO } from './task.dto';
import { Tasks } from './task.entity';
import { TaskRepository } from './task.repository';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository) private taskRepository: TaskRepository,
  ) {}

  async createTaskService(createTaskDTO: CreateTaskDTO): Promise<Tasks> {
    const { name, price } = createTaskDTO;
    return this.taskRepository.createTask(name, price);
  }

  async findTaskByIdService(id: string): Promise<Tasks> {
    return this.taskRepository.findTaskById(id);
  }

  async findAllTaskService(): Promise<Tasks[]> {
    return this.taskRepository.findAllTasks();
  }
  async updateStatusByIdService(id: string): Promise<Tasks> {
    return this.taskRepository.updateStatusById(id);
  }

  async updateStatusWithDetailByIdService(
    id: string,
    updateTaskDTO: UpdateTaskDTO,
  ): Promise<UpdateResult> {
    const { price, status } = updateTaskDTO;
    return this.taskRepository.updateStatusById2(id, price, status);
  }

  async deleteTaskByIdService(id: string): Promise<DeleteResult> {
    return this.taskRepository.deleteTaskById(id);
  }
}
