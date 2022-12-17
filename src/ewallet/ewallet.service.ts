import { Injectable } from '@nestjs/common';

@Injectable()
export class EwalletService {
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
      payment_type: 'gopay',
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

  goPay() {
    const base = this.baseBody();
    const mybody = {
      payment_type: base.payment_type,
      transaction_details: base.transaction_details,
      customer_details: base.customer_details,
      item_details: base.item_details,
      gopay: {
        enable_callback: true,
        callback_url: 'gojek://callback',
      },
    };
    return mybody;
  }
}
