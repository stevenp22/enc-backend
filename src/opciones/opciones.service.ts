import { Injectable } from '@nestjs/common';
import { CreateOpcioneDto } from './dto/create-opcione.dto';
import { UpdateOpcioneDto } from './dto/update-opcione.dto';
import { BuscarNombreDto } from './dto/buscarNombre.dto';
import { Opcione } from '../opciones/schemas/opcione.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OpcionesService {
  constructor(
    @InjectModel(Opcione.name) private OpcioneModel: Model<Opcione>,
  ) {}

  create(createOpcioneDto: CreateOpcioneDto) {
    const createdOpcione = new this.OpcioneModel(createOpcioneDto);
    return createdOpcione.save();
  }

  findAll() {
    return this.OpcioneModel.find();
  }

  findOne(id: string) {
    return this.OpcioneModel.findById(id);
  }

  findName(buscarNombreDto: BuscarNombreDto) {
    const { nombre } = buscarNombreDto;
    return this.OpcioneModel.find({ nombre });
  }

  update(id: string, updateOpcioneDto: UpdateOpcioneDto) {
    return this.OpcioneModel.findByIdAndUpdate(id, updateOpcioneDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.OpcioneModel.findByIdAndDelete(id);
  }
}
