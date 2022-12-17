import { Module } from '@nestjs/common';
import { CoreApiService } from './core-api.service';

@Module({
  providers: [CoreApiService],
  controllers: [],
  exports: [CoreApiService],
})
export class CoreApiModule {}
