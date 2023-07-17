import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Usuario {
  @Prop({
    unique: true,
    dropDups: true,
    required: true,
    trim: true,
  })
  email: string;
  @Prop({
    required: true,
    trim: true,
  })
  password: string;
  @Prop({
    required: true,
    trim: true,
  })
  primerNombre: string;
  @Prop({
    trim: true,
  })
  segundoNombre: string;
  @Prop({
    required: true,
    trim: true,
  })
  primerApellido: string;
  @Prop({
    trim: true,
  })
  segundoApellido: string;
  @Prop({
    required: true,
    trim: true,
  })
  tipoDocumento: string;
  @Prop({
    required: true,
    trim: true,
  })
  numeroDocumento: string;
  @Prop({
    required: true,
    trim: true,
  })
  rol: string;
}
export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
