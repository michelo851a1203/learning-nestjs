import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule, Routes } from 'nest-router';
import { TasksModule } from './tasks/tasks.module';

// must append new database this will create table
// if schema is not exist that cannot connect to

const routes: Routes = [
  {
    path: '/api/v1',
    module: TasksModule,
  },
];

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3100,
      username: 'root',
      password: 'secret',
      database: 'wallettest',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
