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
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    console.log(createUsuarioDto);
    try {
      return await this.usuariosService.create(createUsuarioDto);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('El usuario ya existe');
      }
      throw error;
    }
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const usuario = await this.usuariosService.findOne(id);
    if (!usuario) throw new NotFoundException('usuario no encontrado');
    return usuario;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    const usuario = await this.usuariosService.update(id, updateUsuarioDto);
    if (!usuario) throw new NotFoundException('usuario no encontrada');
    return usuario;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const usuario = await this.usuariosService.remove(id);
    if (!usuario) throw new NotFoundException('usuario no encontrada');
    return usuario;
  }
}
