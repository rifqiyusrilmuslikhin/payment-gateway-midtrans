import { Injectable } from '@nestjs/common';

@Injectable()
export class CstoreService {
  private readonly items: any;
  private readonly customer: any;

  constructor(items: any, customer: any) {
    this.items = items;
    this.customer = customer;
  }

  baseBody() {
    let gross_amount = 0;
    const order_id = new Date().getTime();
    const items = this.items;
    const customer = this.customer;

    items.forEach(function (item) {
      gross_amount += item.price * item.quantity;
    });

    const body = {
      payment_type: 'cstore',
      transaction_details: {
        gross_amount,
        order_id,
      },
      customer_details: {
        email: customer.email,
        first_name: customer.first_name,
        last_name: customer.last_name,
        phone: customer.phone,
      },
      item_details: this.items,
    };
    return body;
  }

  indomaret() {
    const base = this.baseBody();
    const mybody = {
      payment_type: base.payment_type,
      transaction_details: base.transaction_details,
      customer_details: base.customer_details,
      item_details: base.item_details,
      cstore: {
        store: 'indomaret',
        message: 'Pembayaran Produk',
      },
    };
    return mybody;
  }

  alfamart() {
    const base = this.baseBody();
    const mybody = {
      payment_type: base.payment_type,
      transaction_details: base.transaction_details,
      customer_details: base.customer_details,
      item_details: base.item_details,
      cstore: {
        store: 'alfamart',
        alfamart_free_text_1: 'Terima Kasih',
        alfamart_free_text_2: 'Pembayaran Produk',
        alfamart_free_text_3: 'OK',
      },
    };
    return mybody;
  }
}
