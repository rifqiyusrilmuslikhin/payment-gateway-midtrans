import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BankTransferModule } from './bank-transfer/bank-transfer.module';
import { CoreApiService } from './midtrans/core-api/core-api.service';
import { CreditCardModule } from './credit-card/credit-card.module';
import { EwalletModule } from './ewallet/ewallet.module';
import { CstoreModule } from './cstore/cstore.module';
import { ConfigModule } from './midtrans/config/config.module';
import { PaymentModule } from './midtrans/payment/payment.module';
import { CoreApiModule } from './midtrans/core-api/core-api.module';

@Module({
  imports: [
    BankTransferModule,
    CoreApiModule,
    PaymentModule,
    ConfigModule,
    CreditCardModule,
    EwalletModule,
    CstoreModule,
  ],
  controllers: [AppController],
  providers: [AppService, CoreApiService],
})
export class AppModule {}
