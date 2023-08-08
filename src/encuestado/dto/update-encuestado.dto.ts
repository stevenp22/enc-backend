import { PartialType } from '@nestjs/mapped-types';
import { CreateEncuestadoDto } from './create-encuestado.dto';
import { IsString, IsOptional } from 'class-validator';

export class UpdateEncuestadoDto extends PartialType(CreateEncuestadoDto) {
  @IsString()
  @IsOptional()
  nombre: string;
  @IsString()
  @IsOptional()
  empresa: string;
  @IsString()
  @IsOptional()
  nombreEncuestado: string;
  @IsString()
  @IsOptional()
  cargo: string;
  @IsString()
  @IsOptional()
  razonSocial: string;
  @IsString()
  @IsOptional()
  ciudad: string;
  @IsOptional()
  categorias: [];
}
