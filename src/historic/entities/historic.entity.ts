import User from '../../user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class Historic {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column('json')
  data: string;

  @Column('json')
  results: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: string;

  @ManyToOne(() => User, (user) => user.historics)
  user: User;
}

export default Historic;
