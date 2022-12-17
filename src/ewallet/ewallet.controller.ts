import { Body, Controller, forwardRef, Inject, Post } from '@nestjs/common';
import { PaymentService } from 'src/midtrans/payment/payment.service';
import { EwalletService } from './ewallet.service';

@Controller('payment')
export class EwalletController {
  constructor(
    @Inject(forwardRef(() => PaymentService))
    private readonly paymentService: PaymentService,
    private readonly ewalletService: EwalletService,
  ) {}

  @Post('e-wallet')
  async bankTransfer(@Body() body: any) {
    let data;
    const customer = {
      email: 'sukrow123@gmail.com',
      first_name: 'darwin',
      last_name: 'nunez',
      phone: '089237665288',
    };

    const eWallet = new EwalletService(body.items, customer);

    // eslint-disable-next-line prefer-const
    data = eWallet.goPay();

    return this.paymentService.charge(data);
  }
}
