import { Module } from '@nestjs/common';
import { OpcionesService } from './opciones.service';
import { OpcionesController } from './opciones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Opcione, OpcioneSchema } from './schemas/Opcione.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Opcione.name, schema: OpcioneSchema }]),
  ],
  controllers: [OpcionesController],
  providers: [OpcionesService],
})
export class OpcionesModule {}
