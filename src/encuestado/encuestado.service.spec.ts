import { Test, TestingModule } from '@nestjs/testing';
import { EncuestadoService } from './encuestado.service';

describe('EncuestadoService', () => {
  let service: EncuestadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EncuestadoService],
    }).compile();

    service = module.get<EncuestadoService>(EncuestadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
