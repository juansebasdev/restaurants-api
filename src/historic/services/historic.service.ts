import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Historic from '../entities/historic.entity';
import { Repository } from 'typeorm';
import { CreateHistoricDto } from '../dtos/create.historic.dto';
import { HistoricDto } from '../dtos/historic.dto';

@Injectable()
export class HistoricService {
  constructor(
    @InjectRepository(Historic)
    private historicRepository: Repository<Historic>,
  ) {}

  async findByUser(userId: number): Promise<HistoricDto[]> {
    const historics = await this.historicRepository.find({
      where: { user: { id: userId } },
    });
    return historics.map((historic) => {
      return {
        id: historic.id,
        createdAt: historic.createdAt,
        data: JSON.parse(historic.data),
        results: JSON.parse(historic.results),
        user: historic.user,
      };
    });
  }

  async createHistoric(
    createHistoricDto: CreateHistoricDto,
  ): Promise<Historic> {
    const historic = this.historicRepository.create(createHistoricDto);
    return await this.historicRepository.save(historic);
  }
}
