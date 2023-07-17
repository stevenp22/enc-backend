import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpresaDto } from './create-empresa.dto';
import { IsString, IsOptional } from 'class-validator';

export class UpdateEmpresaDto extends PartialType(CreateEmpresaDto) {
  @IsString()
  @IsOptional()
  nombre: string;
  @IsString()
  @IsOptional()
  nit: string;
  @IsString()
  @IsOptional()
  alias: string;
  @IsString()
  @IsOptional()
  actividad_economica: string;
  @IsString()
  @IsOptional()
  direccion: string;
  @IsString()
  @IsOptional()
  municipio_dane: string;
  @IsString()
  @IsOptional()
  telefono: string;
  @IsString()
  @IsOptional()
  correo: string;
}
