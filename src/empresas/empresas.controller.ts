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
import { EmpresasService } from './empresas.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Controller('empresas')
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) {}

  @Post()
  async create(@Body() createEmpresaDto: CreateEmpresaDto) {
    console.log(createEmpresaDto);
    try {
      return await this.empresasService.create(createEmpresaDto);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('La plantilla ya existe');
      }
      throw error;
    }
  }

  @Get()
  findAll() {
    return this.empresasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const empresa = await this.empresasService.findOne(id);
    if (!empresa) throw new NotFoundException('empresa no encontrada');
    return empresa;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEmpresaDto: UpdateEmpresaDto,
  ) {
    const empresa = await this.empresasService.update(id, updateEmpresaDto);
    if (!empresa) throw new NotFoundException('empresa no encontrada');
    return empresa;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const empresa = await this.empresasService.remove(id);
    if (!empresa) throw new NotFoundException('empresa no encontrada');
    return empresa;
  }
}
