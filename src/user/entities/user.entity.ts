import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column('varchar', { unique: true })
  email: string;

  @Column('varchar', { select: false })
  password: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: string;
}

export default User;
