import { Module } from '@nestjs/common';
import { PlantillasService } from './plantillas.service';
import { PlantillasController } from './plantillas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Plantilla, PlantillaSchema } from './schemas/plantilla.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Plantilla.name, schema: PlantillaSchema },
    ]),
  ],
  controllers: [PlantillasController],
  providers: [PlantillasService],
})
export class PlantillasModule {}
