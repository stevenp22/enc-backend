import { IsString, IsNotEmpty } from 'class-validator';

export class CreateEncuestadoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
  @IsString()
  @IsNotEmpty()
  empresa: string;
  @IsString()
  @IsNotEmpty()
  nombreEncuestado: string;
  @IsString()
  @IsNotEmpty()
  cargo: string;
  @IsString()
  @IsNotEmpty()
  razonSocial: string;
  @IsString()
  @IsNotEmpty()
  ciudad: string;
  @IsNotEmpty()
  categorias: [];
}
