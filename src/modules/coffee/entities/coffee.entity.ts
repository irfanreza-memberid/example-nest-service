import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Coffee')
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  memberId: number;
}
