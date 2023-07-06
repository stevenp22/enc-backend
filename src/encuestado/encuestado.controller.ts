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
import { EncuestadoService } from './encuestado.service';
import { CreateEncuestadoDto } from './dto/create-encuestado.dto';
import { UpdateEncuestadoDto } from './dto/update-encuestado.dto';

@Controller('encuestado')
export class EncuestadoController {
  constructor(private readonly encuestadoService: EncuestadoService) {}

  @Post()
  async create(@Body() createEncuestadoDto: CreateEncuestadoDto) {
    console.log(createEncuestadoDto);
    try {
      return await this.encuestadoService.create(createEncuestadoDto);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('encuestado ya existe');
      }
      throw error;
    }
  }

  @Get()
  findAll() {
    return this.encuestadoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const encuestado = await this.encuestadoService.findOne(id);
    if (!encuestado) throw new NotFoundException('encuestado no encontrado');
    return encuestado;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEncuestadoDto: UpdateEncuestadoDto,
  ) {
    const encuestado = await this.encuestadoService.update(
      id,
      updateEncuestadoDto,
    );
    if (!encuestado) throw new NotFoundException('Encuestado no encontrado');
    return encuestado;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const encuestado = await this.encuestadoService.remove(id);
    if (!encuestado) throw new NotFoundException('Encuestado no encontrado');
    return encuestado;
  }
}
