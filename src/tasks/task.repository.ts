import { NotFoundException } from '@nestjs/common';
import {
  DeleteResult,
  EntityRepository,
  Repository,
  UpdateResult,
} from 'typeorm';
import { Tasks } from './task.entity';
import { StatusEnum } from './tasks.enum';

@EntityRepository(Tasks)
export class TaskRepository extends Repository<Tasks> {
  async createTask(name: string, price: number): Promise<Tasks> {
    // test if data will be automatically generated
    const createdTask = this.create({
      name,
      price,
    });
    const savedTasks = this.save(createdTask);
    return savedTasks;
  }

  async findTaskById(id: string): Promise<Tasks> {
    const foundedTask = this.findOne({ where: { id } });
    if (!foundedTask) {
      throw new NotFoundException(`tasks not founded`);
    }
    return foundedTask;
  }

  async findAllTasks(): Promise<Tasks[]> {
    return this.find();
  }

  async updateStatusById(id: string): Promise<Tasks> {
    const foundTask = await this.findTaskById(id);
    foundTask.price += 100;
    foundTask.status = StatusEnum.STATUS_CLOSED;
    const finishedTask = this.save(foundTask);
    return finishedTask;
  }

  async updateStatusById2(
    id: string,
    price: number,
    status: StatusEnum,
  ): Promise<UpdateResult> {
    return this.update(
      {
        price,
        status,
      },
      {
        id,
      },
    );
  }

  async deleteTaskById(id: string): Promise<DeleteResult> {
    return this.delete({ id });
  }
}
