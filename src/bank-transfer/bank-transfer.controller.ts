import { Body, Controller, forwardRef, Inject, Post } from '@nestjs/common';
import { BankTransferService } from './bank-transfer.service';
import { PaymentService } from 'src/midtrans/payment/payment.service';

@Controller('payment')
export class BankTransferController {
  constructor(
    @Inject(forwardRef(() => PaymentService))
    private readonly paymentService: PaymentService,
    private readonly bankTransferService: BankTransferService,
  ) {}

  @Post('bank-transfer')
  async bankTransfer(@Body() body: any) {
    let data;
    const customer = {
      email: 'sukrow123@gmail.com',
      first_name: 'darwin',
      last_name: 'nunez',
      phone: '089237665288',
    };

    const bankTransfer = new BankTransferService(body.items, customer);
    switch (body.channel) {
      case 'BCA':
        data = bankTransfer.bca();
        break;

      case 'BNI':
        data = bankTransfer.bni();
        break;

      case 'PERMATA':
        data = bankTransfer.permata();
        break;
    }
    return this.paymentService.charge(data);
  }
}
