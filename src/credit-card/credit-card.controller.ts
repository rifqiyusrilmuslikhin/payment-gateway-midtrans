import { Body, Controller, forwardRef, Inject, Post } from '@nestjs/common';
import { CreditCardService } from './credit-card.service';
import { PaymentService } from 'src/midtrans/payment/payment.service';

@Controller('payment')
export class CreditCardController {
  constructor(
    @Inject(forwardRef(() => PaymentService))
    private readonly paymentService: PaymentService,
    private readonly creditCardService: CreditCardService,
  ) {}

  @Post('get-token')
  async getToken(@Body() payloads: any) {
    return PaymentService.token(payloads);
  }

  @Post('credit-card')
  async bankTransfer(@Body() body: any) {
    let data;
    const customer = {
      email: 'sukrow123@gmail.com',
      first_name: 'darwin',
      last_name: 'nunez',
      phone: '089237665288',
    };

    const creditCard = new CreditCardService(body.items, customer, body.token);
    switch (body.type) {
      case 'AUTHORIZE':
        data = creditCard.withAuth();
        break;

      case 'BASIC':
        data = creditCard.basic();
        break;
    }
    return this.paymentService.charge(data);
  }
}
