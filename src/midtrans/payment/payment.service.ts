import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CoreApiService } from '../core-api/core-api.service';
import { ConfigService } from '../config/config.service';

@Injectable()
export class PaymentService {
  constructor(
    @Inject(forwardRef(() => CoreApiService))
    private readonly coreApiService: CoreApiService,
  ) {}

  async charge(payloads: any) {
    const result = await CoreApiService.post(
      `${ConfigService.getBaseUrl()}/charge`,
      ConfigService.serverKey,
      payloads,
    );
    return result;
  }

  static async token(payloads: any) {
    const query = `client_key=${payloads.client_key}&card_number=${payloads.card_number}&card_exp_month=${payloads.card_exp_month}&card_exp_year=${payloads.card_exp_year}&card_cvv=${payloads.card_cvv}`;

    const result = await CoreApiService.get(
      `${ConfigService.getBaseUrl()}/token?${query}`,
      ConfigService.serverKey,
      payloads,
    );
    return result;
  }
}
