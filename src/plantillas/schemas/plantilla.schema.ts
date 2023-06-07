import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { pregunta } from './pregunta.entity';

@Schema({ timestamps: true })
export class Plantilla {
  @Prop({
    unique: true,
    dropDups: true,
    required: true,
    trim: true,
  })
  nombre: string;

  @Prop({
    required: true,
    trim: true,
  })
  empresa: string;

  @Prop({
    required: true,
    trim: true,
  })
  preguntas: pregunta[];
}

export const PlantillaSchema = SchemaFactory.createForClass(Plantilla);
