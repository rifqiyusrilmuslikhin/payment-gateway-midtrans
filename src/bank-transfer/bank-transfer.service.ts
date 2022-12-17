import { Injectable } from '@nestjs/common';

@Injectable()
export class BankTransferService {
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
      payment_type: 'bank_transfer',
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

  bca() {
    const base = this.baseBody();
    const mybody = {
      payment_type: base.payment_type,
      transaction_details: base.transaction_details,
      customer_details: base.customer_details,
      item_details: base.item_details,
      bank_transfer: {
        bank: 'bca',
        va_number: '12345678901',
        free_text: {
          inquiry: [
            {
              id: 'text indonesia',
              en: 'text english',
            },
          ],
          payment: [
            {
              id: 'pembayaran produk',
              en: 'product payment',
            },
          ],
        },
      },
    };
    return mybody;
  }

  bni() {
    const base = this.baseBody();
    const mybody = {
      payment_type: base.payment_type,
      transaction_details: base.transaction_details,
      customer_details: base.customer_details,
      item_details: base.item_details,
      bank_transfer: {
        bank: 'BNI',
        va_number: '12345678',
      },
    };
    return mybody;
  }

  permata() {
    const base = this.baseBody();
    const mybody = {
      payment_type: base.payment_type,
      transaction_details: base.transaction_details,
      customer_details: base.customer_details,
      item_details: base.item_details,
      bank_transfer: {
        bank: 'permata',
        va_number: '1234567890',
      },
    };
    return mybody;
  }
}
