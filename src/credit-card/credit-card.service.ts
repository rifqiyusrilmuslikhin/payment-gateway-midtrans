import { Injectable } from '@nestjs/common';

@Injectable()
export class CreditCardService {
  private readonly items: any;
  private readonly customer: any;
  private readonly token: any;

  constructor(items: any, customer: any, token: any) {
    this.items = items;
    this.customer = customer;
    this.token = token;
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
      payment_type: 'credit_card',
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

  withAuth() {
    //with 3ds
    const base = this.baseBody();
    const mybody = {
      payment_type: base.payment_type,
      transaction_details: base.transaction_details,
      customer_details: base.customer_details,
      item_details: base.item_details,
      credit_card: {
        token_id: this.token,
        authentication: true,
        bank: 'bni',
      },
    };
    return mybody;
  }

  basic() {
    //without 3ds
    const base = this.baseBody();
    const mybody = {
      payment_type: base.payment_type,
      transaction_details: base.transaction_details,
      customer_details: base.customer_details,
      item_details: base.item_details,
      credit_card: {
        token_id: this.token,
      },
    };
    return mybody;
  }
}
