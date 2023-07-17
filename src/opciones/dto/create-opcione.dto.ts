import { IsString, IsNotEmpty } from 'class-validator';

export class CreateOpcioneDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
  @IsNotEmpty()
  opciones: string[];
}
