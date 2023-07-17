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
} from '@nestjs/common';
import { OpcionesService } from './opciones.service';
import { CreateOpcioneDto } from './dto/create-opcione.dto';
import { UpdateOpcioneDto } from './dto/update-opcione.dto';
import { BuscarNombreDto } from './dto/buscarNombre.dto';

@Controller('opciones')
export class OpcionesController {
  constructor(private readonly opcionesService: OpcionesService) {}

  @Post()
  async create(@Body() createOpcioneDto: CreateOpcioneDto) {
    console.log(createOpcioneDto);
    try {
      return await this.opcionesService.create(createOpcioneDto);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Las opciones ya existen');
      }
      throw error;
    }
  }

  @Get()
  findAll() {
    return this.opcionesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const opcione = await this.opcionesService.findOne(id);
    if (!opcione) throw new NotFoundException('opciones no encontradas');
    return opcione;
  }

  @Get()
  async findName(@Body() buscarNombreDto: BuscarNombreDto) {
    const opcione = await this.opcionesService.findName(buscarNombreDto);
    if (!opcione) throw new NotFoundException('opcion no encontrada');
    return opcione;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOpcioneDto: UpdateOpcioneDto,
  ) {
    const opcione = await this.opcionesService.update(id, updateOpcioneDto);
    if (!opcione) throw new NotFoundException('Plantilla no encontrada');
    return opcione;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const opcione = await this.opcionesService.remove(id);
    if (!opcione) throw new NotFoundException('Plantilla no encontrada');
    return opcione;
  }
}
