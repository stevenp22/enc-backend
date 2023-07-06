import { Module } from '@nestjs/common';
import { EncuestadoService } from './encuestado.service';
import { EncuestadoController } from './encuestado.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Encuestado, EncuestadoSchema } from './schemas/encuestado.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Encuestado.name, schema: EncuestadoSchema },
    ]),
  ],
  controllers: [EncuestadoController],
  providers: [EncuestadoService],
})
export class EncuestadoModule {}
