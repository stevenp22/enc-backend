import { IsString, IsNotEmpty } from 'class-validator';

export class BuscarNombreDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}
