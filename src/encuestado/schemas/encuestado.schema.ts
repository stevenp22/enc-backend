import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { respuesta } from './respuesta.entity';

@Schema({ timestamps: true })
export class Encuestado {
  @Prop({
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
  nombreEncuestado: string;

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
  categorias: [
    {
      nombre: string;
      respuestas: respuesta[];
    },
  ];
}

export const EncuestadoSchema = SchemaFactory.createForClass(Encuestado);
