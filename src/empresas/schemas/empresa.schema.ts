import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Empresa {
  @Prop({
    unique: true,
    dropDups: true,
    required: true,
    trim: true,
  })
  nombre: string;
  @Prop({
    unique: true,
    dropDups: true,
    required: true,
    trim: true,
  })
  nit: string;
  @Prop({
    unique: true,
    dropDups: true,
    required: true,
    trim: true,
  })
  alias: string;
  @Prop({
    required: true,
    trim: true,
  })
  actividad_economica: string;
  @Prop({
    required: true,
    trim: true,
  })
  direccion: string;
  @Prop({
    required: true,
    trim: true,
  })
  municipio_dane: string;
  @Prop({
    required: true,
    trim: true,
  })
  telefono: string;
  @Prop({
    required: true,
    trim: true,
  })
  correo: string;
}

export const EmpresaSchema = SchemaFactory.createForClass(Empresa);
