import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Opcione {
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
  opciones: string[];
}
export const OpcioneSchema = SchemaFactory.createForClass(Opcione);
