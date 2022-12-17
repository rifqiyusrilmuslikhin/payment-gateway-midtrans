import { forwardRef, Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CoreApiModule } from 'src/midtrans/core-api/core-api.module';
import { ConfigModule } from 'src/midtrans/config/config.module';

@Module({
  providers: [PaymentService],
  controllers: [],
  imports: [forwardRef(() => CoreApiModule), forwardRef(() => ConfigModule)],
  exports: [PaymentService],
})
export class PaymentModule {}
