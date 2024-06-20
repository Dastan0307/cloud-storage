import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { FileEnity } from './entities/file.entity'

@Module({
  controllers: [FilesController],
  providers: [FilesService],
  imports: [TypeOrmModule.forFeature([FileEnity])]
})
export class FilesModule {}
