import { PartialType } from '@nestjs/mapped-types';
import { CreateEncuestadoDto } from './create-encuestado.dto';
import { IsString, IsOptional } from 'class-validator';
import { respuesta } from '../schemas/respuesta.entity';

export class UpdateEncuestadoDto extends PartialType(CreateEncuestadoDto) {
  @IsString()
  @IsOptional()
  encuesta: string;
  @IsString()
  @IsOptional()
  nombre: string;
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
  respuestas: respuesta[];
}
