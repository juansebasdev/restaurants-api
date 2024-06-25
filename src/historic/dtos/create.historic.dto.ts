import User from 'src/user/entities/user.entity';

export interface CreateHistoricDto {
  data: string;
  results: string;
  user: User;
}
