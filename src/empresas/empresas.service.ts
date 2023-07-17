import { Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from '../empresas/schemas/empresa.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EmpresasService {
  constructor(
    @InjectModel(Empresa.name) private empresaModel: Model<Empresa>,
  ) {}
  create(createEmpresaDto: CreateEmpresaDto) {
    const createdEmpresa = new this.empresaModel(createEmpresaDto);
    return createdEmpresa.save();
  }
  findAll() {
    return this.empresaModel.find();
  }

  findOne(id: string) {
    return this.empresaModel.findById(id);
  }

  update(id: string, updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresaModel.findByIdAndUpdate(id, updateEmpresaDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.empresaModel.findByIdAndDelete(id);
  }
}
