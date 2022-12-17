import { Injectable } from '@nestjs/common';

import * as dotenv from 'dotenv';

dotenv.config();

const SANDBOX_BASE_URL = 'https://api.sandbox.midtrans.com/v2';
const PRODUCTION_BASE_URL = 'https://api.midtrans.com/v2';

@Injectable()
export class ConfigService {
  static serverKey = process.env.SERVER_KEY;
  static isProduction = false;
  static id3ds = false;
  static isSanitized = false;

  static getBaseUrl() {
    return ConfigService.isProduction ? PRODUCTION_BASE_URL : SANDBOX_BASE_URL;
  }
}
