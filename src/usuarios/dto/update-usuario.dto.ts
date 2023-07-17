import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsString, IsOptional } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  @IsString()
  @IsOptional()
  email: string;
  @IsString()
  @IsOptional()
  password: string;
  @IsString()
  @IsOptional()
  primerNombre: string;
  @IsString()
  @IsOptional()
  segundoNombre: string;
  @IsString()
  @IsOptional()
  primerApellido: string;
  @IsString()
  @IsOptional()
  segundoApellido: string;
  @IsString()
  @IsOptional()
  tipoDocumento: string;
  @IsString()
  @IsOptional()
  numeroDocumento: string;
  @IsString()
  @IsOptional()
  rol: string;
}
