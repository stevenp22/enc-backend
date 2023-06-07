import { IsString, IsNotEmpty } from 'class-validator';
import { pregunta } from '../schemas/pregunta.entity';

export class CreatePlantillaDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
  @IsString()
  @IsNotEmpty()
  empresa: string;
  @IsNotEmpty()
  preguntas: pregunta[];
}
