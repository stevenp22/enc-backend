import { IsString, IsNotEmpty } from 'class-validator';
import { categoria } from '../schemas/categoria.entity';

export class CreatePlantillaDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
  @IsString()
  @IsNotEmpty()
  empresa: string;
  @IsString()
  @IsNotEmpty()
  tipo: string;
  @IsNotEmpty()
  categorias: categoria[];
}
