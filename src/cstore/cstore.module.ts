import { forwardRef, Module } from '@nestjs/common';
import { CstoreService } from './cstore.service';
import { CstoreController } from './cstore.controller';
import { PaymentModule } from 'src/midtrans/payment/payment.module';

@Module({
  providers: [CstoreService, Object],
  controllers: [CstoreController],
  imports: [forwardRef(() => PaymentModule)],
})
export class CstoreModule {}
