import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from '../usuarios/schemas/usuario.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<Usuario>,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    const hashedPassword = bcrypt.hash(createUsuarioDto.password, 10);
    const createdUsuario = new this.usuarioModel({
      data: { ...createUsuarioDto, password: hashedPassword },
    });
    return createdUsuario.save();
  }

  findAll() {
    return this.usuarioModel.find();
  }

  findOne(id: string) {
    return this.usuarioModel.findById(id);
  }

  update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioModel.findByIdAndUpdate(id, updateUsuarioDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.usuarioModel.findByIdAndDelete(id);
  }
}
