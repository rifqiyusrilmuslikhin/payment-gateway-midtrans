import { forwardRef, Module } from '@nestjs/common';
import { BankTransferService } from './bank-transfer.service';
import { BankTransferController } from './bank-transfer.controller';
import { PaymentModule } from 'src/midtrans/payment/payment.module';

@Module({
  providers: [BankTransferService, Object],
  controllers: [BankTransferController],
  imports: [forwardRef(() => PaymentModule)],
})
export class BankTransferModule {}
