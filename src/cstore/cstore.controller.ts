import { Body, Controller, forwardRef, Inject, Post } from '@nestjs/common';
import { PaymentService } from 'src/midtrans/payment/payment.service';
import { CstoreService } from './cstore.service';

@Controller('payment')
export class CstoreController {
  constructor(
    @Inject(forwardRef(() => PaymentService))
    private readonly paymentService: PaymentService,
    private readonly cstoreService: CstoreService,
  ) {}

  @Post('c-store')
  async bankTransfer(@Body() body: any) {
    let data;
    const customer = {
      email: 'sukrow123@gmail.com',
      first_name: 'darwin',
      last_name: 'nunez',
      phone: '089237665288',
    };

    const cStore = new CstoreService(body.items, customer);
    switch (body.store) {
      case 'INDOMARET':
        data = cStore.indomaret();
        break;

      case 'ALFAMART':
        data = cStore.alfamart();
        break;
    }
    return this.paymentService.charge(data);
  }
}
