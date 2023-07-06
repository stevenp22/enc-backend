import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { respuesta } from './respuesta.entity';

@Schema({ timestamps: true })
export class Encuestado {
  @Prop({
    required: true,
    trim: true,
  })
  encuesta: string;

  @Prop({
    required: true,
    trim: true,
  })
  nombre: string;

  @Prop({
    required: true,
    trim: true,
  })
  cargo: string;

  @Prop({
    required: true,
    trim: true,
  })
  razonSocial: string;

  @Prop({
    required: true,
    trim: true,
  })
  ciudad: string;

  @Prop({
    required: true,
    trim: true,
  })
  respuestas: respuesta[];
}

export const EncuestadoSchema = SchemaFactory.createForClass(Encuestado);
