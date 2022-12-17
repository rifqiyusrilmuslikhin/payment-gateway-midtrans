import { Test, TestingModule } from '@nestjs/testing';
import { CstoreService } from './cstore.service';

describe('CstoreService', () => {
  let service: CstoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CstoreService],
    }).compile();

    service = module.get<CstoreService>(CstoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
