import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [ConfigService],
  controllers: [],
  exports: [ConfigService],
})
export class ConfigModule {}
