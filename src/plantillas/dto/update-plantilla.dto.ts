import { PartialType } from '@nestjs/mapped-types';
import { CreatePlantillaDto } from './create-plantilla.dto';
import { IsString, IsOptional } from 'class-validator';
import { pregunta } from '../schemas/pregunta.entity';

export class UpdatePlantillaDto extends PartialType(CreatePlantillaDto) {
  @IsString()
  @IsOptional()
  nombre?: string;
  @IsString()
  @IsOptional()
  empresa?: string;
  @IsOptional()
  preguntas?: pregunta[];
}
