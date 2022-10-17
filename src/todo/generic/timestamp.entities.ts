/* eslint-disable prettier/prettier */
import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
export class timestampEntities {
  @CreateDateColumn({ update: false })
  DateDeCreation: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;
}
