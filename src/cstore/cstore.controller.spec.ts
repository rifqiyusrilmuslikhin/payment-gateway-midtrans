import { Test, TestingModule } from '@nestjs/testing';
import { CstoreController } from './cstore.controller';

describe('CstoreController', () => {
  let controller: CstoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CstoreController],
    }).compile();

    controller = module.get<CstoreController>(CstoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
