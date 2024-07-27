import { Module } from '@nestjs/common';
import { PlantillasService } from './plantillas.service';
import { PlantillasController } from './plantillas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Plantilla, PlantillaSchema } from './schemas/plantilla.schema';
import { MulterModule } from '@nestjs/platform-express';
import { extname } from 'path';
import { v4 as uuid } from 'uuid';
import { diskStorage } from 'multer';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Plantilla.name, schema: PlantillaSchema },
    ]),
    MulterModule.registerAsync({
      useFactory: () => ({
        storage: diskStorage({
          destination: './public/uploads/',
          filename: (req: any, file: any, cb: any) => {
            cb(null, `${uuid()}${extname(file.originalname)}`);
          },
        }),
      }),
    }),
  ],
  controllers: [PlantillasController],
  providers: [PlantillasService],
})
export class PlantillasModule {}
