import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileEnity } from './entities/file.entity';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FileEnity)
    private repository: Repository<FileEnity>,
  ) {}

  findAll() {
    return this.repository.find();
  }
}
