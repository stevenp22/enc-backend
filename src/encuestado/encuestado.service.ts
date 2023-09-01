import { Injectable } from '@nestjs/common';
import { CreateEncuestadoDto } from './dto/create-encuestado.dto';
import { UpdateEncuestadoDto } from './dto/update-encuestado.dto';
import { Encuestado } from '../encuestado/schemas/encuestado.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EncuestadoService {
  constructor(
    @InjectModel(Encuestado.name) private encuestadoModel: Model<Encuestado>,
  ) {}

  create(createEncuestadoDto: CreateEncuestadoDto) {
    const createdEncuestado = new this.encuestadoModel(createEncuestadoDto);
    return createdEncuestado.save();
  }

  findAll() {
    return this.encuestadoModel.find();
  }

  findOne(id: string) {
    return this.encuestadoModel.findById(id);
  }

  findByNombre(nombreObj: { nombre: string }) {
    const { nombre } = nombreObj;
    return this.encuestadoModel.find({ nombre });
  }

  update(id: string, updateEncuestadoDto: UpdateEncuestadoDto) {
    return this.encuestadoModel.findByIdAndUpdate(id, updateEncuestadoDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.encuestadoModel.findByIdAndDelete(id);
  }
}
