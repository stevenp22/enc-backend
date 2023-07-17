import { IsString, IsNotEmpty } from 'class-validator';

export class CreateEmpresaDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
  @IsString()
  @IsNotEmpty()
  nit: string;
  @IsString()
  @IsNotEmpty()
  alias: string;
  @IsString()
  @IsNotEmpty()
  actividad_economica: string;
  @IsString()
  @IsNotEmpty()
  direccion: string;
  @IsString()
  @IsNotEmpty()
  municipio_dane: string;
  @IsString()
  @IsNotEmpty()
  telefono: string;
  @IsString()
  @IsNotEmpty()
  correo: string;
}
