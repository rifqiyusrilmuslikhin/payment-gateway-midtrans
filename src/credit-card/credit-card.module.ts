import { forwardRef, Module } from '@nestjs/common';
import { CreditCardService } from './credit-card.service';
import { CreditCardController } from './credit-card.controller';
import { PaymentModule } from 'src/midtrans/payment/payment.module';

@Module({
  providers: [CreditCardService, Object],
  controllers: [CreditCardController],
  imports: [forwardRef(() => PaymentModule)],
})
export class CreditCardModule {}
