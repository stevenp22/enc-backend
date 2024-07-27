import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ConflictException,
  NotFoundException,
  HttpCode,
  UseInterceptors,
  UploadedFile,
  ParseFilePipeBuilder,
  HttpStatus,
} from '@nestjs/common';
import { PlantillasService } from './plantillas.service';
import { CreatePlantillaDto } from './dto/create-plantilla.dto';
import { UpdatePlantillaDto } from './dto/update-plantilla.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('plantillas')
export class PlantillasController {
  constructor(private readonly plantillasService: PlantillasService) {}

  @Post()
  async create(@Body() createPlantillaDto: CreatePlantillaDto) {
    console.log(createPlantillaDto);
    try {
      return await this.plantillasService.create(createPlantillaDto);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('La plantilla ya existe');
      }
      throw error;
    }
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('imagen'))
  uploadFileAndPassValidation(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'jpg|jpeg|png|gif',
        })
        .addMaxSizeValidator({
          maxSize: 1000000,
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    imagen?: Express.Multer.File,
  ) {
    console.log(imagen);
    return imagen.filename;
  }

  @Get()
  findAll() {
    return this.plantillasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const plantilla = await this.plantillasService.findOne(id);
    if (!plantilla) throw new NotFoundException('Plantilla no encontrada');
    return plantilla;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePlantillaDto: UpdatePlantillaDto,
  ) {
    const plantilla = await this.plantillasService.update(
      id,
      updatePlantillaDto,
    );
    if (!plantilla) throw new NotFoundException('Plantilla no encontrada');
    return plantilla;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const plantilla = await this.plantillasService.remove(id);
    if (!plantilla) throw new NotFoundException('Plantilla no encontrada');
    return plantilla;
  }
}
