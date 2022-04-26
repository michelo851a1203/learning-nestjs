import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { StatusEnum } from './tasks.enum';

@Entity()
export class Tasks {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, default: '' })
  name: string;

  @Column({ type: 'bigint', default: 0 })
  price: number;

  @Column({ type: 'enum', enum: StatusEnum, default: StatusEnum.STATUS_OPEN })
  status: StatusEnum;
  @CreateDateColumn({ nullable: false })
  createAt: Date;

  @UpdateDateColumn({ nullable: false })
  updateAt: Date;

  @VersionColumn({ nullable: false, default: 1 })
  version: number;
}
