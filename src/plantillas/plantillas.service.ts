import { Injectable } from '@nestjs/common';
import { CreatePlantillaDto } from './dto/create-plantilla.dto';
import { UpdatePlantillaDto } from './dto/update-plantilla.dto';
import { Plantilla } from '../plantillas/schemas/plantilla.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PlantillasService {
  constructor(
    @InjectModel(Plantilla.name) private plantillaModel: Model<Plantilla>,
  ) {}

  create(createPlantillaDto: CreatePlantillaDto) {
    const createdPlantilla = new this.plantillaModel(createPlantillaDto);
    return createdPlantilla.save();
  }

  findAll() {
    return this.plantillaModel.find();
  }

  findOne(id: string) {
    return this.plantillaModel.findById(id);
  }

  update(id: string, updatePlantillaDto: UpdatePlantillaDto) {
    return this.plantillaModel.findByIdAndUpdate(id, updatePlantillaDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.plantillaModel.findByIdAndDelete(id);
  }
}
