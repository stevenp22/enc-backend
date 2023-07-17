import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlantillasModule } from './plantillas/plantillas.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EncuestadoModule } from './encuestado/encuestado.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EmpresasModule } from './empresas/empresas.module';
import { OpcionesModule } from './opciones/opciones.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    PlantillasModule,
    EncuestadoModule,
    UsuariosModule,
    EmpresasModule,
    OpcionesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
