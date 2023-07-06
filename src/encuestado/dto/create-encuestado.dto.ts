import { IsString, IsNotEmpty } from 'class-validator';
import { respuesta } from '../schemas/respuesta.entity';

export class CreateEncuestadoDto {
  @IsString()
  @IsNotEmpty()
  encuesta: string;
  @IsString()
  @IsNotEmpty()
  nombre: string;
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
  respuestas: respuesta[];
}
