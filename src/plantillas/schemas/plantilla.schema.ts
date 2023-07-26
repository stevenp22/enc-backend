import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { categoria } from './categoria.entity';

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
  tipo: string;

  @Prop({
    required: true,
    trim: true,
  })
  categorias: categoria[];
}

export const PlantillaSchema = SchemaFactory.createForClass(Plantilla);
