import { PartialType } from '@nestjs/mapped-types';
import { CreateOpcioneDto } from './create-opcione.dto';
import { IsString, IsOptional } from 'class-validator';

export class UpdateOpcioneDto extends PartialType(CreateOpcioneDto) {
  @IsString()
  @IsOptional()
  nombre: string;
  @IsOptional()
  opciones: string[];
}
