import { forwardRef, Module } from '@nestjs/common';
import { EwalletService } from './ewallet.service';
import { EwalletController } from './ewallet.controller';
import { PaymentModule } from 'src/midtrans/payment/payment.module';

@Module({
  providers: [EwalletService, Object],
  controllers: [EwalletController],
  imports: [forwardRef(() => PaymentModule)],
})
export class EwalletModule {}
