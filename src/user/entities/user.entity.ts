import Historic from '../../historic/entities/historic.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column('varchar', { unique: true })
  email: string;

  @Column('varchar')
  password: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: string;

  @OneToMany(() => Historic, (historic) => historic.user, { nullable: true })
  historics: Historic[];
}

export default User;
