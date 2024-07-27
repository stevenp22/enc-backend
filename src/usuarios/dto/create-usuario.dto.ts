import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsString()
  @IsNotEmpty()
  primerNombre: string;
  @IsString()
  @IsOptional()
  segundoNombre: string;
  @IsString()
  @IsNotEmpty()
  primerApellido: string;
  @IsString()
  @IsOptional()
  segundoApellido: string;
  @IsString()
  @IsNotEmpty()
  tipoDocumento: string;
  @IsString()
  @IsNotEmpty()
  numeroDocumento: string;
  @IsString()
  @IsNotEmpty()
  rol: string;
}
