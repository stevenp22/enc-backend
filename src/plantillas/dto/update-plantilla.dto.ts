import { PartialType } from '@nestjs/mapped-types';
import { CreatePlantillaDto } from './create-plantilla.dto';
import { IsString, IsOptional } from 'class-validator';
import { categoria } from '../schemas/categoria.entity';

export class UpdatePlantillaDto extends PartialType(CreatePlantillaDto) {
  @IsString()
  @IsOptional()
  nombre?: string;
  @IsString()
  @IsOptional()
  empresa?: string;
  @IsString()
  @IsOptional()
  tipo: string;
  @IsOptional()
  categorias?: categoria[];
}
