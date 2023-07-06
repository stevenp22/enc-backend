import { Test, TestingModule } from '@nestjs/testing';
import { EncuestadoController } from './encuestado.controller';
import { EncuestadoService } from './encuestado.service';

describe('EncuestadoController', () => {
  let controller: EncuestadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EncuestadoController],
      providers: [EncuestadoService],
    }).compile();

    controller = module.get<EncuestadoController>(EncuestadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
